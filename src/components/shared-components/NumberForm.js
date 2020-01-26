import React from "react";
import { Formik, Form, Field, ErrorMessage } from "formik";
import "./SimpleFormSubmit.scss";
import PropTypes from "prop-types";
import { gql } from "apollo-boost";
import { useMutation } from "@apollo/react-hooks";

const ADD_PHONE = gql`
  mutation CreateLead($phone_number: String!) {
    createLead(input: { phoneNumber: $phone_number }) {
      lead {
        id
        phoneNumber
      }
    }
  }
`;


export const NumberForm = ({ isActive, showPopUp, showInputClass}) => {
  const [addNumber, { data }] = useMutation(ADD_PHONE);

  return (
    <>
      <Formik
        // Set Initial Values
        initialValues={{ number: "" }}
        // Validate Email
        validate={values => {
          const errors = {};
          if (!values.number) {
            errors.number = "Required";
          } else if (
            !/^[+]?[(]?[0-9]{3}[)]?[-\s.]?[0-9]{3}[-\s.]?[0-9]{4,6}$/im.test(
              values.number
            )
          ) {
            errors.number = "Invalid Phone Number";
          }
          return errors;
        }}
        // TODO: Set error for 404
        onSubmit={(values, { setSubmitting }) => {
          console.log("I ran");
          alert(JSON.stringify(values, null, 2));
          setSubmitting(false);
            addNumber({ variables: { phone_number: `+1${values.number}` } });
            values.number = "";
            showPopUp();
        }}

      >

        {({ isSubmitting }) => (
          <Form
            className={
              "simple-form " +
              (isActive ? "" : "hidden") +
              (showInputClass ? " highlight-input" : "")
            }
          >
            <div>
              <ErrorMessage className="error" name="number" component="div" />
            </div>
            <div className="inner-form">
                <Field placeholder="555-555-5555" type="number" name="number" />
              <button type="submit" disabled={isSubmitting}>
                Get Alerted
              </button>
            </div>
          </Form>
        )}
      </Formik>
    </>
  );
};

NumberForm.propTypes = {
  isActive: PropTypes.bool.isRequired,
  showPopUp: PropTypes.func.isRequired,
  showInputClass: PropTypes.bool.isRequired
};

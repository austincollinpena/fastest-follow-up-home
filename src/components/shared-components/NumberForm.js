import React from "react";
import { Formik, Form, Field, ErrorMessage } from "formik";
import "./SimpleFormSubmit.scss";
import PropTypes from "prop-types";

export const NumberForm = ({ isActive, showPopUp }) => (
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
          !/^[\+]?[(]?[0-9]{3}[)]?[-\s\.]?[0-9]{3}[-\s\.]?[0-9]{4,6}$/im.test(
            values.number
          )
        ) {
          errors.email = "Invalid email address";
        }
        return errors;
      }}
      onSubmit={(values, { setSubmitting }) => {
          showPopUp();
        console.log("I ran");
          alert(JSON.stringify(values, null, 2));
          setSubmitting(false);

      }}
    >
      {({ isSubmitting }) => (
        <Form className={"simple-form " + (isActive ? "" : "hidden")}>
          <div>
            <ErrorMessage className="error" name="number" component="div" />
          </div>
          <div className="inner-form">
            <Field placeHolder="555-555-5555" type="number" name="number" />
            <button type="submit" disabled={isSubmitting}>
              Get Alerted
            </button>
          </div>
        </Form>
      )}
    </Formik>
  </>
);

NumberForm.propTypes = {
  isActive: PropTypes.string.isRequired,
  showPopUp: PropTypes.func.isRequired
};

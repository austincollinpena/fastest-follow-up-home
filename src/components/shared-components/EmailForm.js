import React from "react";
import { Formik, Form, Field, ErrorMessage } from "formik";
import "./SimpleFormSubmit.scss";
import PropTypes from "prop-types";
import { gql } from 'apollo-boost';
import { useMutation} from "@apollo/react-hooks";


const ADD_EMAIL = gql`
    mutation CreateLead($email: String!) {
        createLead(input: {email: $email}) {
            lead {
                id
                email
            }
        }
    }
`;


export const EmailForm = ({ isActive, showPopUp, showInputClass }) => {


    const [addTodo, {data}] = useMutation(ADD_EMAIL);

    return (

        <Formik
            // Set Initial Values
            initialValues={{email: ""}}
            // Validate Email
            validate={values => {
                const errors = {};
                if (!values.email) {
                    errors.email = "Required";
                } else if (
                    !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(values.email)
                ) {
                    errors.email = "Invalid email address";
                }
                return errors;
            }}
            onSubmit={(values, {setSubmitting}) => {
                // showPopUp();
                JSON.stringify(values, null, 2);
                addTodo({variables: {email: values.email}});
                setSubmitting(false);
            }}
        >
            {({isSubmitting}) => (
                <Form
                    className={"simple-form " + (isActive ? "" : "hidden") + (showInputClass ? " highlight-input" : "")}>
                    <div>
                        <ErrorMessage className="error" name="email" component="div"/>
                    </div>
                    <div className="inner-form">
                        <Field placeholder="ILuvLeads@gmail.com" type="email" name="email"/>
                        <button type="submit" disabled={isSubmitting}>
                            Get Alerted
                        </button>
                    </div>
                </Form>
            )}
        </Formik>
    );

}

EmailForm.propTypes = {
    isActive: PropTypes.bool.isRequired,
    showPopUp: PropTypes.func.isRequired,
    showInputClass: PropTypes.bool.isRequired
};

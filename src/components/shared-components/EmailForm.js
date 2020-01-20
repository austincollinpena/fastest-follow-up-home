import React from "react";
import { Formik, Form, Field, ErrorMessage } from "formik";
import "./SimpleFormSubmit.scss"

export const EmailForm = ({isActive}) => (
    <Formik
        // Set Initial Values
        initialValues={{ email: "" }}
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
        onSubmit={(values, { setSubmitting }) => {
            setTimeout(() => {
                alert(JSON.stringify(values, null, 2));
                setSubmitting(false);

            }, 400);
        }}
    >
        {({ isSubmitting }) => (
            <Form className={"simple-form " + (isActive ? "" : "hidden") }>
                <div>
                    <ErrorMessage className="error" name="email" component="div" />
                </div>
                <div className="inner-form">
                    <Field placeHolder="ILuvLeads@gmail.com" type="email" name="email" />
                    <button type="submit" disabled={isSubmitting}>
                        Get Alerted
                    </button>
                </div>
            </Form>
        )}
    </Formik>
)
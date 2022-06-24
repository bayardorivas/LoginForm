import React from "react";
// TODO: import useFormik from formik library
import { Formik, Field, Form } from "formik";
import "./index.css";

function App() {
  // TODO: add a const called formik assigned to useFormik()
  function validateEmail(value) {
    let error;
    if (!value) {
      error = "Field required";
    } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(value)) {
      error = "Username should be an email";
    }
    return error;
  }

  function validatePass(value) {
    let error;
    if (!value) {
      error = "Field required";
    }
    return error;
  }

  return (
    <>
      <div className="formulario">
        <Formik
          initialValues={{
            email: "",
            password: "",
          }}
          onSubmit={async (values) => {
            await new Promise((r) => setTimeout(r, 500));
            alert("Login Successful");
          }}
        >
          {({ errors, touched, isValidating }) => (
            <Form>
              <h1>Login Form</h1>
              <div className="form-group">
                <label htmlFor="emailField">Email</label>

                <Field
                  id="emailField"
                  name="email"
                  placeholder="brivas@rivas.com"
                  type="email"
                  validate={validateEmail}
                />
                {errors.email && touched.email && (
                  <div id="emailError" className="error">
                    {errors.email}
                  </div>
                )}
              </div>
              <div className="form-group">
                <label htmlFor="pswField">Password </label>
                <Field
                  id="pswField"
                  name="password"
                  placeholder="****"
                  type="password"
                  validate={validatePass}
                />
                {errors.password && touched.password && (
                  <div id="pswError" className="error">
                    {errors.password}
                  </div>
                )}
              </div>
              <div className="form-group">
                <button id="submitBtn" type="submit">
                  Submit
                </button>
              </div>
            </Form>
          )}
        </Formik>
      </div>
    </>
  );
}

export default App;

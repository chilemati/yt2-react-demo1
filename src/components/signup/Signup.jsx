import React from "react";
import { Formik, Form, Field } from "formik";
import * as Yup from "yup";

const SignupSchema = Yup.object().shape({
  firstName: Yup.string()
    .min(2, "Too Short!")
    .max(50, "Too Long!")
    .required("Required"),
  lastName: Yup.string()
    .min(2, "Too Short!")
    .max(50, "Too Long!")
    .required("Required"),
  email: Yup.string().email("Invalid email").required("Required"),
  password: Yup.string().required('please enter your passowrd')
  .matches(
    /^(?=.*[a-z])/,
    " Must Contain One Lowercase Character"
  )
  .matches(
    /^(?=.*[A-Z])/,
    "  Must Contain One Uppercase Character"
  )
  .matches(
    /^(?=.*[0-9])/,
    "  Must Contain One Number Character"
  )
  .matches(
    /^(?=.*[!@#\$%\^&\*])/,
    "  Must Contain  One Special Case Character"
  ),
});

export const Signup = () => (
  <div>
    <h1>Signup</h1>
    <Formik
      initialValues={{
        firstName: "",
        lastName: "",
        email: "",
        password: "",
      }}
      validationSchema={SignupSchema}
      onSubmit={(values) => {
        // same shape as initial values
        console.log(values);
      }}
    >
      {({ errors, touched }) => (
        <Form className="flex items-center justify-center flex-col gap-2 ">
          <Field
            className="px-3 border border-1"
            placeholder="First Name"
            name="firstName"
          />
          {errors.firstName && touched.firstName ? (
            <div className="text-red-500 text-[8px] mb-3 " >{errors.firstName}</div>
          ) : null}
          <Field
            className="px-3 border border-1"
            placeholder="Last Name"
            name="lastName"
          />
          {errors.lastName && touched.lastName ? (
            <div className="text-red-500 text-[8px] mb-3 ">{errors.lastName}</div>
          ) : null}
          <Field
            className="px-3 border border-1 mb-3"
            placeholder="Email"
            name="email"
            type="email"
          />
          {errors.email && touched.email ? <div className="text-red-500 text-[8px] mb-3 ">{errors.email}</div> : null}
          <Field
            className="px-3 border border-1 mb-3"
            placeholder="strong password"
            name="password"
            type="password"
          />
          {errors.password && touched.password ? <div className="text-red-500 text-[8px] mb-3 ">{errors.password}</div> : null}
          <button type="submit">Submit</button>
        </Form>
      )}
    </Formik>
  </div>
);

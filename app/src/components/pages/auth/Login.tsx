
import React, { createContext, useContext, useState } from 'react';
import Signup from "./Signup";
import * as Yup from "yup";
import { useFormik } from "formik";
import { Link } from "react-router-dom";

type InitialValues = {
    email: string;
    password: string;
};
const AuthContext = createContext(null);

const Login = () => {
    const formik = useFormik<InitialValues>({
        initialValues: {
            email: "",
            password: ""
        },
        validationSchema: Yup.object({
            email: Yup.string()
                .email("Enter your valid email address")
                .required("Required"),
            password: Yup.string()
                .nonNullable("Password should not be blank")
                .required("Required")
        }),

        onSubmit: values => {
            alert(JSON.stringify(values, null, 2));
            formik.resetForm();
        }
    });


    return (
        <>
            <div className="container col-lg-4 mb-4 mt-4 shadow p-3 mb-5 bg-body rounded">
                <form onSubmit={formik.handleSubmit} className="container">
                    <h3 className="item-center text-center">Sign In</h3>
                    <div className="mb-3">
                        <label>Email address</label>
                        <input
                            type="text"
                            name="email"
                            className="form-control"
                            placeholder="Email address"
                            onChange={formik.handleChange}
                            onBlur={formik.handleBlur}
                            value={formik.values.email}
                        />
                        <p className="text-danger">
                            {formik.touched.email && formik.errors.email ? (
                                <div className="text-danger">{formik.errors.email}</div>
                            ) : null}
                        </p>
                    </div>
                    <div className="mb-3">
                        <label>Password</label>
                        <input
                            type="password"
                            name="password"
                            className="form-control"
                            placeholder="Password"
                            onChange={formik.handleChange}
                            onBlur={formik.handleBlur}
                            value={formik.values.password}
                        />
                        <p className="text-danger">
                            {formik.touched.password && formik.errors.password ? (
                                <div className="text-danger">{formik.errors.password}</div>
                            ) : null}
                        </p>
                    </div>
                    <div className="mb-3">
                        <div className="custom-control custom-checkbox">
                            <input
                                type="checkbox"
                                className="custom-control-input"
                                id="customCheck1"
                            />
                            <label className="custom-control-label" htmlFor="customCheck1">
                                Remember me
                            </label>
                        </div>
                    </div>
                    <div className="d-grid">
                        <button
                            className="btn btn-primary"
                            type="submit"
                            disabled={!formik.isValid}
                        >
                            Submit
                        </button>

                    </div>
                    <div className="forgot-password">
                        <span className="text-start">
                            New User <Link to="/auth/signup">Signup</Link>
                        </span>
                        <span className="text-end">
                            Forgot <a href="#">password?</a>
                        </span>
                    </div>
                </form>
            </div>

        </>
    )
}

export default Login;
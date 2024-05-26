
import React from "react"
import * as Yup from "yup";
import { Field, useFormik } from "formik";

const countryList = [
    { value: "india", label: "India" },
    { value: "us", label: "US" },
    { value: "australia", label: "Australia" }
];
const languageList = [
    { value: "english", label: "English" },
    { value: "hindi", label: "Hindi" },
    { value: "spanish", label: "Spanish" },
    { value: "arabic", label: "Arabic" }
];

const Signup = () => {
    const formik = useFormik({
        initialValues: {
            name: "",
            email: "",
            mobile: "",
            password: "",
            confirmPassword: "",
            gender: '',
            language: [] as string[],
            country: "",
            zipCode: ""
        },
        validationSchema: Yup.object({
            name: Yup.string().required("Required").nonNullable("Name must not be empty"),
            email: Yup.string()
                .email("Enter your valid email address")
                .required("Required"),
            password: Yup.string()
                .nonNullable("Password should not be blank")
                .required("Required"),
            confirmPassword: Yup.string()
                .oneOf([Yup.ref('password')], 'Confirm Password must match with your password')
                .required('Required'),
            gender: Yup.string()
                .nonNullable("Gender should not be blank")
                .required("Required"),
            mobile: Yup.string()
                .nonNullable("Gender should not be blank")
                .required("Required"),
            language: Yup.array()
                .of(Yup.string())
                .min(1, "Select at least one language")
                .required("Required"),
            country: Yup.string()
                .required("Required"),
            zipCode: Yup.string()
                .required("Required").nonNullable("Name must not be empty"),
        }),

        onSubmit: values => {
            alert(JSON.stringify(values, null, 2));
            // formik.resetForm();
        }
    });

    return (
        <>
            <div className="container col-lg-6 col-md-12 mb-4 mt-2 shadow p-3 mb-5 bg-body rounded">
            <h3 className="item-center text-center">Sign UP</h3>
                <form onSubmit={formik.handleSubmit}>
                    <div className="row">
                        <div className="col-md-6">
                            <div className="form-group">
                                <label>
                                    Name:<span className="asterisk">*</span>
                                </label>
                                <input
                                    className="form-control"
                                    type="text"
                                    name="name"
                                    onChange={formik.handleChange}
                                    onBlur={formik.handleBlur}
                                    value={formik.values.name}
                                />
                                <p className="text-danger">
                                    {formik.touched.name && formik.errors.name ? (
                                        <div className="text-danger">{formik.errors.name}</div>
                                    ) : null}
                                </p>
                            </div>
                            <div className="form-group">
                                <label>
                                    Email:<span className="asterisk">*</span>
                                </label>
                                <input
                                    className="form-control"
                                    type="text"
                                    name="email"
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

                            <div className="form-group">
                                <label>
                                    Password:<span className="asterisk">*</span>
                                </label>
                                <input
                                    className="form-control"
                                    type="password"
                                    name="password"
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
                            <div className="form-group">
                                <label>
                                    Confirm Password:<span className="asterisk">*</span>
                                </label>
                                <input
                                    className="form-control"
                                    type="password"
                                    name="confirmPassword"
                                    onChange={formik.handleChange}
                                    onBlur={formik.handleBlur}
                                    value={formik.values.confirmPassword}
                                />
                                <p className="text-danger">
                                    {formik.touched.confirmPassword && formik.errors.confirmPassword ? (
                                        <div className="text-danger">{formik.errors.confirmPassword}</div>
                                    ) : null}
                                </p>
                            </div>
                            <div className="form-group">
                                <label className="mr-3">
                                    Language:<span className="asterisk">*</span>
                                </label>
                                <div className="form-control border-0 p-0 pt-1">
                                    {languageList.map((x, i) => {
                                        return (
                                            <label key={i} className="mr-2">
                                                <input
                                                    type="checkbox"
                                                    name="language"
                                                    value={x.value}
                                                    onChange={formik.handleChange}
                                                    onBlur={formik.handleBlur}
                                                    checked={formik.values.language.includes(x.value)}
                                                />{" "}
                                                {x.label}
                                            </label>
                                        );
                                    })}
                                </div>
                                <p className="text-danger">
                                    {formik.touched.language && formik.errors.language ? (
                                        <div className="text-danger">{formik.errors.language}</div>
                                    ) : null}
                                </p>
                            </div>
                        </div>
                        <div className="col-md-6">
                            <div className="form-group">
                                <label>
                                    Mobile:<span className="asterisk">*</span>
                                </label>
                                <input
                                    className="form-control"
                                    type="text"
                                    name="mobile"
                                    onChange={formik.handleChange}
                                    onBlur={formik.handleBlur}
                                    value={formik.values.mobile}
                                />
                                <p className="text-danger">
                                    {formik.touched.mobile && formik.errors.mobile ? (
                                        <div className="text-danger">{formik.errors.mobile}</div>
                                    ) : null}
                                </p>
                            </div>
                            <div className="form-group">
                                <label className="mr-3">
                                    Gender:<span className="asterisk">*</span>
                                </label>
                                <div className="form-control border-0 p-0 pt-1">
                                    <label className="mr-2">
                                        <input
                                            type="radio"
                                            name="gender"
                                            value="male"
                                            onChange={formik.handleChange}
                                            onBlur={formik.handleBlur}
                                        />{" "}
                                        Male
                                    </label>
                                    <label>
                                        <input
                                            type="radio"
                                            name="gender"
                                            value="female"
                                            onChange={formik.handleChange}
                                            onBlur={formik.handleBlur}
                                        />{" "}
                                        Female
                                    </label>
                                </div>

                                <p className="text-danger">
                                    {formik.touched.gender && formik.errors.gender ? (
                                        <div className="text-danger">{formik.errors.gender}</div>
                                    ) : null}
                                </p>
                            </div>
                            <div className="form-group">
                                <label>Zip Code:</label>
                                <input
                                    className="form-control"
                                    type="text"
                                    name="zipCode"
                                    onChange={formik.handleChange}
                                    onBlur={formik.handleBlur}
                                    value={formik.values.zipCode}
                                />
                            </div>
                            <p className="text-danger">
                                {formik.touched.zipCode && formik.errors.zipCode ? (
                                    <div className="text-danger">{formik.errors.zipCode}</div>
                                ) : null}
                            </p>
                            <div className="form-group">
                                <label>
                                    Country:<span className="asterisk">*</span>
                                </label>
                                <select
                                    name="country"
                                    className="form-control"
                                    onChange={formik.handleChange}
                                    onBlur={formik.handleBlur}
                                    value={formik.values.country}
                                >
                                    <option value="">Select a country</option>
                                    {countryList.map((country, index) => (
                                        <option key={index} value={country.value}>
                                            {country.label}
                                        </option>
                                    ))}
                                </select>

                            </div>
                            <p className="text-danger">
                                {formik.touched.country && formik.errors.country ? (
                                    <div className="text-danger">{formik.errors.country}</div>
                                ) : null}
                            </p>
                        </div>
                    </div>

                    <div className="form-group form-row text-center">
                        <div className="col-12">
                            <button
                                className=" form-control btn btn-primary btn-block" // Apply the btn-block class here
                                type="submit"
                                disabled={!formik.isValid}
                            >
                                Submit
                            </button>
                        </div>
                    </div>
                </form>
            </div>
        </>
    );

}

export default Signup;
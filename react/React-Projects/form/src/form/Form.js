import React, {memo} from "react";
import {useFormik} from "formik";
import { signupSchema } from "../schemas";
import "./Form.css";

const initialValues = {
    name: "",
    email: "",
    password: "",
    cpassword: "",
};

const Form = () =>{
    
    const {values,handleBlur, handleChange, handleSubmit, errors, touched} = useFormik({
        initialValues,
        validationSchema: signupSchema,
        onSubmit:(values, actions) => {
            console.log(values);
            actions.resetForm();
        },
    });
    
    return(
        <div className="app">
            <form className="signup_form" onSubmit={handleSubmit}>
                <label htmlFor="name">Name</label>
                <input type="text" name="name"
                value={values.name} 
                onBlur={handleBlur}
                onChange={handleChange}/>
                <div className="error_container">
                    {errors.name && touched.name && (
                        <p className="form_error">{errors.name}</p>
                    )}
                </div>

                <label htmlFor="email">Email</label>
                <input type="email" name="email"
                value={values.email} 
                onBlur={handleBlur}
                onChange={handleChange}/>
                <div className="error_container">
                    {errors.email && touched.email && (
                        <p className="form_error">{errors.email}</p>
                    )}
                </div>

                <label htmlFor="password">Password</label>
                <input type="password"  name="password"
                value={values.password} 
                onBlur={handleBlur}
                onChange={handleChange}/>
                <div className="error_container">
                    {errors.password && touched.password && (
                        <p className="form_error">{errors.password}</p>
                    )}
                </div>

                <label htmlFor="cpasswork">Confirm Password</label>
                <input type="password" name="cpassword" 
                value={values.cpassword} 
                onBlur={handleBlur}
                onChange={handleChange}/>
                <div className="error_container">
                    {errors.cpassword && touched.cpassword && (
                        <p className="form_error">{errors.cpassword}</p>
                    )}
                </div>

                <button type="submit">Submit</button>
            </form>
        </div>
    );
};

export default memo(Form);
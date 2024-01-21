import * as Yup from 'yup';

const passwordRegex = new RegExp("^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@$%^&*])(?=.{8,})");

export const signupSchema = Yup.object({
    name: Yup.string().min(3).required("Please Enter Your Name"),
    email: Yup.string().email().required("Please Enter Your Email"),
    password: Yup.string().matches(passwordRegex,"Please Enter Valid Password").required("Please Enter Your Password"),
    cpassword: Yup.string().oneOf([Yup.ref("password")], "password do not match!").required("Please enter confirm pasword")
});
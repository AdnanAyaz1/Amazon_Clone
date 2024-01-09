import * as Yup from "yup";

export const RegistorValidationSchema = Yup.object({
  name: Yup.string().min(2).max(20).required("Name Cannot Be Empty"),
  email: Yup.string()
    .email("Please Enter a Valid Email")
    .required("Email is Required"),
  password: Yup.string().min(6).required("Password cannot be empty"),
  confirm_password: Yup.string()
    .required("Please Re-enter your password")
    .oneOf([Yup.ref("password"), null], "Password does not match"),
});


export const SigninValidationSchema = Yup.object({
  email:Yup.string().email('Enter a Valid Email').required('Email is Required'),
  password:Yup.string().min(2).required('Password is Required')
})

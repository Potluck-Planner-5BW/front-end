import * as yup from "yup";

export const regSchema = yup.object().shape({

name: yup
    .string()
    .min(2, "name must be at least 2 characters")
    .required("Name is Required"),
email: yup 
    .string()
    .email('Must Be a Valid Email!')
    .required('Email is Required'),
password: yup
    .string()
    .min(6, 'Must be at least 6 characters!')
    .required('Password is Required'),
});
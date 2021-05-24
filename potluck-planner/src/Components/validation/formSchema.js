import * as yup from "yup";

export const schema = yup.object().shape({

    email: yup 
    .string()
    .email('Must Be a Valid Email!')
    .required('Email is Required'),
password: yup
    .string()
    .min(6, 'Must be at least 6 characters!')
    .required('Password is Required'),
remember_me: yup
    .boolean()
    .oneOf([true], 'You must accept the Terms of Service and Privacy Policy'),
 
});
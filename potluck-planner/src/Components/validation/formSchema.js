import * as yup from "yup";

export const schema = yup.object().shape({

email: yup 
    .string()
    .email('Must be a valid email!')
    .required('Email is required'),

password: yup
    .string()
    .min(6, 'Must be at least 6 characters!')
    .required('Password is Required'),

remember_me: yup
    .boolean()
    .oneOf([true], 'You must accept the Terms of Service and Privacy Policy'),
auth_code: yup
    .string()
 
});
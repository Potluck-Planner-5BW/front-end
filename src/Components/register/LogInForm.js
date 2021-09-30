import * as yup from "yup";
import { schema } from '../validation/formSchema';
import { useState, useEffect } from 'react';
import { useHistory } from 'react-router-dom';
import { Link } from 'react-router-dom';
import axios from "axios";

export default function LogInForm(props) {


    /* -------- CURRENT USER LOGIN ------------  */
    /* -------- CURRENT USER LOGIN ------------  */
    /* -------- CURRENT USER LOGIN ------------  */

    const [user, setUser] = useState([]);
    const [formValues, setFormValues] = useState(initialFormValues);
    const [formErrors, setFormErrors] = useState(initialError);
    const [disable, setDisable] = useState(disableNow);

    /* -------------------------- HELPERS -------------------------- */
    /* -------------------------- AXIOS -------------------------- */
    /* -------------------------- PLUS -------------------------- */

    const postUser = (userx) => {
        axios
            .post('https://reqres.in/api/orders/', userx)
            .then(({ data }) => {
                setUser([data, ...user]);
                console.log(data)
            })
            .catch(error => console.log('Error Posting Users:', error));
    };

    /* -------- CHANGE HANDLER ------------  */
    /* -------- CHANGE HANDLER ------------  */
    /* -------- CHANGE HANDLER ------------  */
    const inputChange = (event) => {
        const { name, value, checked, type } = event.target
        const inputValue = type === "checkbox" ? checked : value

        yup
            .reach(schema, name)
            .validate(inputValue)
            .then(() =>
                setFormErrors({
                    ...formErrors,
                    [name]: ''
                })
            )
            .catch((err) =>
                setFormErrors({
                    ...formErrors,
                    [name]: err.errors[0]
                })
            );

        setFormValues({
            ...formValues,
            [name]: inputValue
        })
    }

    useEffect(() => {
        schema.isValid(formValues)
            .then((valid) => setDisable(!valid))
            .catch(err => console.log(err))
    }, [formValues]);

    /* -------- SUBMIT HANDLER ------------  */
    /* -------- SUBMIT HANDLER ------------  */
    /* -------- SUBMIT HANDLER ------------  */
    

    const history = useHistory();

    const onSubmit = event => {
        event.preventDefault()
        postUser(formValues)
        console.log(postUser)
        if (formValues.auth_code === '') {
            return history.push('/dashboard')
        } else {
            return history.push('/dashboard/organizer')
        }
    }

    return (
        <>
            <div className="min-h-screen flex items-center justify-center bg-gray-50 py-12 px-4 sm:px-6 lg:px-8">
                <div className="max-w-md w-full space-y-8">
                    <div>
                        <img
                            className="mx-auto h-28 w-auto"
                            src="https://uploads-ssl.webflow.com/6010580d08831070b0339b25/60aae538cc512e19c981cafa_Artboard%2027.png"
                            alt="Workflow"
                        />

                        {/* <a href="#" className="block relative">
                        <img alt="profil" src="https://uploads-ssl.webflow.com/6010580d08831070b0339b25/60ac2e081a5db338cbc23534_BLKME3%202.PNG" className="mx-auto object-cover rounded-full h-20 w-20"/>
                    </a> */}

                        <h2 className="mt-6 text-center text-3xl font-extrabold text-gray-900">Sign in to the Potluck!</h2>
                        <p className="mt-2 text-center text-sm text-gray-600">
                            Not a member yet?{' '}
                            <Link to="/sign-up" className="font-bold font-medium text-yellow-400 hover:text-yellow-300">
                                Sign-up
                        </Link>
                        </p>
                    </div>


                    {/*  ------- FORM LOGIN INFO ------ */}

                    <form className="mt-8 space-y-6" action="#" method="POST" onSubmit={onSubmit}>
                        <div>
                            <div>{formErrors.email}</div>
                            <div>{formErrors.password}</div>


                        </div>

                        <input type="hidden" name="remember" defaultValue="true" />
                        <div className="rounded-md shadow-sm -space-y-px">
                            <div>
                                <label htmlFor="email-address" className="sr-only">
                                    E-mail address
                            </label>
                                <input
                                    id="email-address"
                                    name="email"
                                    type="email"
                                    value={formValues.email}
                                    onChange={inputChange}
                                    autoComplete="email"
                                    className="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-t-md focus:outline-none focus:ring-yellow-400 focus:border-yellow-400 focus:z-10 sm:text-sm"
                                    placeholder="Email address"
                                />
                            </div>
                            <div>
                                <label htmlFor="password" className="sr-only">
                                    Password
                            </label>
                                <input
                                    id="password"
                                    name="password"
                                    type="password"
                                    onChange={inputChange}
                                    value={formValues.password}
                                    autoComplete="current-password"
                                    className="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-b-md focus:outline-none focus:ring-yellow-400 focus:border-yellow-400 focus:z-10 sm:text-sm"
                                    placeholder="Password"
                                />
                            </div>
                            <div>
                                <label htmlFor="password" className="">
                                    <br />
                                </label>
                                <input
                                    id="auth_code"
                                    name='auth_code'
                                    type="text"
                                    onChange={inputChange}
                                    value={formValues.auth_code}
                                    autoComplete="current-password"
                                    className="appearance-none rounded relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-b-md focus:outline-none focus:ring-yellow-400 focus:border-yellow-400 focus:z-10 sm:text-sm"
                                    placeholder="Organizer Authorization Code"
                                />
                            </div>
                        </div>

                        {/*  ------- REMEMBER ME / FORGOT PASSWORD ------ */}
                        <div className="flex items-center justify-between">
                            <div className="flex items-center">
                                <input
                                    id="remember_me"
                                    name="remember_me"
                                    type="checkbox"
                                    onChange={inputChange}
                                    checked={formValues.remember_me}
                                    className="h-4 w-4 bg-brand focus:ring-yellow-500 border-gray-300 rounded"
                                />

                                <label htmlFor="remember_me" className="ml-2 block text-sm text-gray-900">
                                    Remember me
                            </label>
                            </div>



                            <div className="text-sm">
                                <Link to="/" className="font-medium text-black hover:text-yellow-400">
                                    Forgot your password?
                            </Link>
                            </div>
                        </div>

                        <div>
                            <button disable={disable} type="submit" className="group relative w-full flex justify-center py-2 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-yellow-400 hover:bg-yellow-300  focus:outline-none focus:ring-2 focus:ring-offset-2  focus:ring-yellow-400">
                                <span className="absolute left-0 inset-y-0 flex items-center pl-3">
                                </span>
                                Sign in
                           </button>
                        </div>
                    </form>
                </div>
            </div>

        </>

    )
}




const initialFormValues = {
  email: '',
  password: '',
  remember_me: false,
  auth_code: '',

}

const initialError = {
  email: '',
  password: '',
  remember_me: false,
  auth_code: ''
}

const disableNow = true;
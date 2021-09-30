import { Link } from 'react-router-dom';
import { useHistory } from 'react-router-dom'
import axios from "axios";
import * as yup from "yup";
import { useState, useEffect } from 'react';
import { regSchema } from '../validation/RegistrationSchema';


function SignupForm(props) {

    /* -------- NEW USER REGISTRATION ------------  */
    /* -------- NEW USER REGISTRATION ------------  */

    const [setNewUser] = useState([]);
    const [registrationValues, setRegistrationValues] = useState(initialRegistrationValues);
    const [registrationErrors, setRegistrationErrors] = useState(initialRegistrationError);
    const [disableRegistration, setDisableRegistration] = useState(disableRegistrationNow);

    /* -------------------------- SIGN-UP HELPERS -------------------------- */
    /* -------------------------- SIGN-UP AXIOS -------------------------- */
    /* -------------------------- SIGN-UP PLUS -------------------------- */

    const postNewUser = (newUser) => {
        axios
            .post('https://reqres.in/api/orders/', newUser)
            .then(({ data }) => {
                setNewUser([data, ...newUser]);
                console.log(data)
            })
            .catch(error => console.log('Error Posting Users:', error));
    };


    /* -------- REGISTRATION CHANGE HANDLER ------------  */
    /* -------- REGISTRATION CHANGE HANDLER ------------  */
    /* -------- REGISTRATION CHANGE HANDLER ------------  */
    const registrationChange = (event) => {
        const { name, value, checked, type } = event.target
        const inputRegValue = type === "checkbox" ? checked : value

        yup
            .reach(regSchema, name)
            .validate(inputRegValue)
            .then(() =>
                setRegistrationErrors({
                    ...registrationErrors,
                    [name]: ''
                })
            )
            .catch((err) =>
                setRegistrationErrors({
                    ...registrationErrors,
                    [name]: err.errors[0]
                })
            );

        setRegistrationValues({
            ...registrationValues,
            [name]: inputRegValue
        })
    }

    useEffect(() => {
        regSchema.isValid(registrationValues)
            .then((valid) => setDisableRegistration(!valid))
            .catch(err => console.log(err))
    }, [registrationValues]);

    /* -------- SUBMIT HANDLER ------------  */
    /* -------- SUBMIT HANDLER ------------  */
    /* -------- SUBMIT HANDLER ------------  */




    const history = useHistory();

    const submitRNow = event => {
        event.preventDefault()
        postNewUser(registrationValues)
        console.log(postNewUser)
        history.push('/Login')

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

                        <h2 className="mt-6 text-center text-3xl font-extrabold text-gray-900">Join the Potluck Team!</h2>
                        <p className="mt-2 text-center text-sm text-gray-600"> <br />

                            <div class=" -space-x-2">

                                <img class="inline-block h-20 w-20 rounded-full object-cover ring-white " src="https://uploads-ssl.webflow.com/6010580d08831070b0339b25/6010580f12e8865c685af689_artist-avatar.jpg" alt="Guy" />


                                <img class="inline-block h-20 w-20 rounded-full object-cover ring-white" src="https://uploads-ssl.webflow.com/6010580d08831070b0339b25/60ac2e081a5db338cbc23534_BLKME3%202.PNG" alt="Max" />


                                <img class="inline-block h-20 w-20 rounded-full object-cover ring-white" src="https://uploads-ssl.webflow.com/6010580d08831070b0339b25/6010580f12e88650d75af6b5_hero-img-3.jpg" alt="Charles" />


                                <img class="inline-block h-20 w-20 rounded-full object-cover ring-white" src="https://uploads-ssl.webflow.com/6010580d08831070b0339b25/6010580f12e886124e5af6c9_hero-img-4.jpg" alt="Jade" />

                            </div><br />
                            Or{' '}
                            <Link to="#" className="font-bold text-black hover:text-yellow-300">
                                start your 30-day free trial
                        </Link>


                        </p>
                    </div>


                    {/*  ------- FORM LOGIN INFO ------ */}

                    <form className="mt-8 space-y-6" action="#" method="POST" onSubmit={submitRNow}>
                        <div>
                            <div>{registrationErrors.name}</div>
                            <div>{registrationErrors.email}</div>
                            <div>{registrationErrors.password}</div>


                        </div>

                        <input type="hidden" name="remember" defaultValue="true" />
                        <div className="rounded-md shadow-sm -space-y-px">
                            <div>
                                <label htmlFor="name" className="sr-only">
                                    Username
                            </label>
                                <input
                                    id="name"
                                    name="name"
                                    type="name"
                                    value={registrationValues.name}
                                    onChange={registrationChange}
                                    autoComplete="name"
                                    className="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-t-md focus:outline-none focus:ring-yellow-400 focus:border-yellow-400 focus:z-10 sm:text-sm"
                                    placeholder="Username"
                                />
                            </div>
                            <div>
                                <label htmlFor="email-address" className="sr-only">
                                    E-mail address
                            </label>
                                <input
                                    id="email-address"
                                    name="email"
                                    type="email"
                                    value={registrationValues.email}
                                    onChange={registrationChange}
                                    autoComplete="email"
                                    className="appearance-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 focus:outline-none focus:ring-yellow-400 focus:border-yellow-400 focus:z-10 sm:text-sm"
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
                                    onChange={registrationChange}
                                    value={registrationValues.password}
                                    autoComplete="current-password"
                                    className="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-b-md focus:outline-none focus:ring-yellow-400 focus:border-yellow-400 focus:z-10 sm:text-sm"
                                    placeholder="Password"
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
                                    onregistrationChange={registrationChange}
                                    checked={registrationValues.remember_me}
                                    className="h-4 w-4 bg-brand-dark focus:ring-yellow-400 border-gray-300 rounded"
                                />
                                <label htmlFor="remember_me" className="ml-2 block text-sm text-gray-900">
                                    Remember me
                            </label>
                            </div>

                            <div className="text-sm">
                                Already a member? <Link className="text-yellow-400 hover:text-opacity-50" to="/sign-in">Login</Link>

                            </div>
                        </div>

                        <div>
                            <button disabled={disableRegistration} type="submit" className="group relative w-full flex justify-center py-2 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-yellow-400 hover:bg-yellow-300  focus:outline-none focus:ring-2 focus:ring-offset-2  focus:ring-yellow-400">
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




export default SignupForm;




const initialRegistrationValues = {
    name: '',
    email: '',
    password: ''

}

const initialRegistrationError = {
    name: '',
    email: '',
    password: ''

}

const disableRegistrationNow = true;


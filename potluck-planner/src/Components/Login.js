import React from 'react';
import { useHistory } from 'react-router-dom';
import { Link } from 'react-router-dom';

export default function Login(props) {
    const { values, change, submit, disable, error } = props;

    const history = useHistory();

    const onSubmit = event => {
        event.preventDefault()
        submit()
        if (values.auth_code === '') {
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
                            <Link to="/Registration" className="font-bold font-medium text-yellow-400 hover:text-yellow-300">
                                Sign-up
                        </Link>
                        </p>
                    </div>


                    {/*  ------- FORM LOGIN INFO ------ */}

                    <form className="mt-8 space-y-6" action="#" method="POST" onSubmit={onSubmit}>
                        <div>
                            <div>{error.email}</div>
                            <div>{error.password}</div>


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
                                    value={values.email}
                                    onChange={change}
                                    autoComplete="email"
                                    className="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-t-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm"
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
                                    onChange={change}
                                    value={values.password}
                                    autoComplete="current-password"
                                    className="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-b-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm"
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
                                    onChange={change}
                                    value={values.auth_code}
                                    autoComplete="current-password"
                                    className="appearance-none rounded relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-b-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm"
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
                                    onChange={change}
                                    checked={values.remember_me}
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
                            <button disabled={disable} type="submit" className="group relative w-full flex justify-center py-2 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-yellow-400 hover:bg-yellow-300  focus:outline-none focus:ring-2 focus:ring-offset-2  focus:ring-yellow-400">
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
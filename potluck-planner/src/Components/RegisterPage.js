import { Link } from 'react-router-dom';



function Registration(props) {
    const { rValues, rChange, rSubmit, rDisable, rError, organizer } = props;


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
                        <p className="mt-2 text-center text-sm text-gray-600"> <br/>

                            <div class=" -space-x-2">
                                
                                    <img class="inline-block h-20 w-20 rounded-full object-cover ring-white " src="https://uploads-ssl.webflow.com/6010580d08831070b0339b25/6010580f12e8865c685af689_artist-avatar.jpg" alt="Guy" />
                                
                                
                                    <img class="inline-block h-20 w-20 rounded-full object-cover ring-white" src="https://uploads-ssl.webflow.com/6010580d08831070b0339b25/60ac2e081a5db338cbc23534_BLKME3%202.PNG" alt="Max" />
                                
                                
                                    <img class="inline-block h-20 w-20 rounded-full object-cover ring-white" src="https://uploads-ssl.webflow.com/6010580d08831070b0339b25/6010580f12e88650d75af6b5_hero-img-3.jpg" alt="Charles" />
                                
                                
                                    <img class="inline-block h-20 w-20 rounded-full object-cover ring-white" src="https://uploads-ssl.webflow.com/6010580d08831070b0339b25/6010580f12e886124e5af6c9_hero-img-4.jpg" alt="Jade" />
                                
                            </div><br/>
                            Or{' '}
                        <Link to="#" className="font-medium text-indigo-600 hover:text-indigo-500">
                            start your 30-day free trial
                        </Link>


                        </p>
                    </div>


                    {/*  ------- FORM LOGIN INFO ------ */}

                    <form className="mt-8 space-y-6" action="#" method="POST" onSubmit={rSubmit}>
                        <div>
                            <div>{rError.name}</div>
                            <div>{rError.email}</div>
                            <div>{rError.password}</div>


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
                                    value={rValues.name}
                                    onChange={rChange}
                                    autoComplete="name"
                                    className="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-t-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm"
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
                                    value={rValues.email}
                                    onChange={rChange}
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
                                    onrChange={rChange}
                                    value={rValues.password}
                                    autoComplete="current-password"
                                    className="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-b-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm"
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
                                    onrChange={rChange}
                                    checked={rValues.remember_me}
                                    className="h-4 w-4 bg-brand-dark focus:ring-indigo-500 border-gray-300 rounded"
                                />
                                <label htmlFor="remember_me" className="ml-2 block text-sm text-gray-900">
                                    Are you an Organizer?
                            </label>
                            </div>

                            <div className="text-sm">
                                    Already a member? <Link className="text-brand hover:text-opacity-50" to="/Login">Login</Link>
                          
                            </div>
                        </div>

                        <div>
                            <button rDisable={rDisable} type="submit" className="group relative w-full flex justify-center py-2 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-brand hover:bg-brand-dark focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500">
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




export default Registration;


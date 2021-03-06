import React from 'react';
import Food from "../Items/Food";
import { useState } from "react";
import { useHistory } from "react-router-dom";

const initialValues = {
    time_set: "",
    date_set: "",
    location: ""
}


function OrganizerDash() {


    const [formValues, setFormValues] = useState(initialValues)

    const changeHandler = (event) => {
        setFormValues({
            ...formValues,
            [event.target.name]: event.target.value

        })
        event.preventDefault()


    }

    const subby = (event) => {
        event.preventDefault()
    }

    const history = useHistory();
    const createNew = (event) => {
        event.preventDefault()
        history.push('/select')

    }



    return (

        <main className="bg-gray-100 dark:bg-gray-800 rounded-2xl relative h-screen overflow-hidden ">
            <div className="flex items-start justify-between">
                <div className="h-screen hidden lg:block my-4 ml-4 shadow-lg relative w-80">
                    <div className="bg-yellow-300 h-full rounded-2xl dark:bg-gray-700">
                        <div className="flex items-center justify-center pt-6">
                            <img alt="profil" className="w-80 md:w-60  p-4" src="https://uploads-ssl.webflow.com/6010580d08831070b0339b25/60aa9a598f7c9865a91a9da1_Artboard%2031.png" />
                        </div>
                        <nav className="mt-6">


                            {/* -------------------- MENU ITEMS ----------------*/}
                            <div>
                                <div className="w-full font-thin uppercase text-yellow-400 flex items-center p-4 my-2 transition-colors duration-200 justify-start bg-gradient-to-r from-white to-yellow-100 border-r-4 border-bs dark: from-white dark: to-yellow-100 border-r-4 border-yellow-400">
                                    <span className="text-left">
                                        <svg width="20" height="20" fill="currentColor" viewBox="0 0 2048 1792" xmlns="http://www.w3.org/2000/svg">
                                            <path d="M1070 1178l306-564h-654l-306 564h654zm722-282q0 182-71 348t-191 286-286 191-348 71-348-71-286-191-191-286-71-348 71-348 191-286 286-191 348-71 348 71 286 191 191 286 71 348z">
                                            </path>
                                        </svg>
                                    </span>
                                    <span className="mx-4 text-sm font-normal">
                                        Dashboard
                            </span>
                                </div>
                                <div className="w-full font-thin uppercase text-gray-600 dark:text-gray-200 flex items-center p-4 my-2 transition-colors duration-200 justify-start hover:text-blue-500">
                                    <span className="text-left">
                                        <svg width="20" height="20" fill="currentColor" className="m-auto" viewBox="0 0 2048 1792" xmlns="http://www.w3.org/2000/svg">
                                            <path d="M1024 1131q0-64-9-117.5t-29.5-103-60.5-78-97-28.5q-6 4-30 18t-37.5 21.5-35.5 17.5-43 14.5-42 4.5-42-4.5-43-14.5-35.5-17.5-37.5-21.5-30-18q-57 0-97 28.5t-60.5 78-29.5 103-9 117.5 37 106.5 91 42.5h512q54 0 91-42.5t37-106.5zm-157-520q0-94-66.5-160.5t-160.5-66.5-160.5 66.5-66.5 160.5 66.5 160.5 160.5 66.5 160.5-66.5 66.5-160.5zm925 509v-64q0-14-9-23t-23-9h-576q-14 0-23 9t-9 23v64q0 14 9 23t23 9h576q14 0 23-9t9-23zm0-260v-56q0-15-10.5-25.5t-25.5-10.5h-568q-15 0-25.5 10.5t-10.5 25.5v56q0 15 10.5 25.5t25.5 10.5h568q15 0 25.5-10.5t10.5-25.5zm0-252v-64q0-14-9-23t-23-9h-576q-14 0-23 9t-9 23v64q0 14 9 23t23 9h576q14 0 23-9t9-23zm256-320v1216q0 66-47 113t-113 47h-352v-96q0-14-9-23t-23-9h-64q-14 0-23 9t-9 23v96h-768v-96q0-14-9-23t-23-9h-64q-14 0-23 9t-9 23v96h-352q-66 0-113-47t-47-113v-1216q0-66 47-113t113-47h1728q66 0 113 47t47 113z">
                                            </path>
                                        </svg>
                                    </span>
                                    <span className="mx-4 text-sm font-normal">
                                        Projects
                            </span>
                                </div>
                                <div className="w-full font-thin uppercase text-gray-600  dark:text-gray-200 flex items-center p-4 my-2 transition-colors duration-200 justify-start hover:text-blue-500">
                                    <span className="text-left">
                                        <svg width="20" height="20" fill="currentColor" className="m-auto" viewBox="0 0 2048 1792" xmlns="http://www.w3.org/2000/svg">
                                            <path d="M685 483q16 0 27.5-11.5t11.5-27.5-11.5-27.5-27.5-11.5-27 11.5-11 27.5 11 27.5 27 11.5zm422 0q16 0 27-11.5t11-27.5-11-27.5-27-11.5-27.5 11.5-11.5 27.5 11.5 27.5 27.5 11.5zm-812 184q42 0 72 30t30 72v430q0 43-29.5 73t-72.5 30-73-30-30-73v-430q0-42 30-72t73-30zm1060 19v666q0 46-32 78t-77 32h-75v227q0 43-30 73t-73 30-73-30-30-73v-227h-138v227q0 43-30 73t-73 30q-42 0-72-30t-30-73l-1-227h-74q-46 0-78-32t-32-78v-666h918zm-232-405q107 55 171 153.5t64 215.5h-925q0-117 64-215.5t172-153.5l-71-131q-7-13 5-20 13-6 20 6l72 132q95-42 201-42t201 42l72-132q7-12 20-6 12 7 5 20zm477 488v430q0 43-30 73t-73 30q-42 0-72-30t-30-73v-430q0-43 30-72.5t72-29.5q43 0 73 29.5t30 72.5z">
                                            </path>
                                        </svg>
                                    </span>
                                    <span className="mx-4 text-sm font-normal">
                                        My tasks
                            </span>
                                </div>
                                <div className="w-full font-thin uppercase text-gray-600 dark:text-gray-200 flex items-center p-4 my-2 transition-colors duration-200 justify-start hover:text-blue-500">
                                    <span className="text-left">
                                        <svg width="20" height="20" fill="currentColor" className="m-auto" viewBox="0 0 2048 1792" xmlns="http://www.w3.org/2000/svg">
                                            <path d="M960 0l960 384v128h-128q0 26-20.5 45t-48.5 19h-1526q-28 0-48.5-19t-20.5-45h-128v-128zm-704 640h256v768h128v-768h256v768h128v-768h256v768h128v-768h256v768h59q28 0 48.5 19t20.5 45v64h-1664v-64q0-26 20.5-45t48.5-19h59v-768zm1595 960q28 0 48.5 19t20.5 45v128h-1920v-128q0-26 20.5-45t48.5-19h1782z">
                                            </path>
                                        </svg>
                                    </span>
                                    <span className="mx-4 text-sm font-normal">
                                        Calendar
                            </span>
                                </div>
                                <div className="w-full font-thin uppercase text-gray-600  dark:text-gray-200 flex items-center p-4 my-2 transition-colors duration-200 justify-start hover:text-blue-500">
                                    <span className="text-left">
                                        <svg width="20" height="20" className="m-auto" fill="currentColor" viewBox="0 0 2048 1792" xmlns="http://www.w3.org/2000/svg">
                                            <path d="M1070 1178l306-564h-654l-306 564h654zm722-282q0 182-71 348t-191 286-286 191-348 71-348-71-286-191-191-286-71-348 71-348 191-286 286-191 348-71 348 71 286 191 191 286 71 348z">
                                            </path>
                                        </svg>
                                    </span>
                                    <span className="mx-4 text-sm font-normal">
                                        Time manage
                            </span>
                                </div>
                                <div className="w-full font-thin uppercase text-gray-600  dark:text-gray-200 flex items-center p-4 my-2 transition-colors duration-200 justify-start hover:text-blue-500">
                                    <span className="text-left">
                                        <svg width="20" height="20" fill="currentColor" className="m-auto" viewBox="0 0 2048 1792" xmlns="http://www.w3.org/2000/svg">
                                            <path d="M1024 1131q0-64-9-117.5t-29.5-103-60.5-78-97-28.5q-6 4-30 18t-37.5 21.5-35.5 17.5-43 14.5-42 4.5-42-4.5-43-14.5-35.5-17.5-37.5-21.5-30-18q-57 0-97 28.5t-60.5 78-29.5 103-9 117.5 37 106.5 91 42.5h512q54 0 91-42.5t37-106.5zm-157-520q0-94-66.5-160.5t-160.5-66.5-160.5 66.5-66.5 160.5 66.5 160.5 160.5 66.5 160.5-66.5 66.5-160.5zm925 509v-64q0-14-9-23t-23-9h-576q-14 0-23 9t-9 23v64q0 14 9 23t23 9h576q14 0 23-9t9-23zm0-260v-56q0-15-10.5-25.5t-25.5-10.5h-568q-15 0-25.5 10.5t-10.5 25.5v56q0 15 10.5 25.5t25.5 10.5h568q15 0 25.5-10.5t10.5-25.5zm0-252v-64q0-14-9-23t-23-9h-576q-14 0-23 9t-9 23v64q0 14 9 23t23 9h576q14 0 23-9t9-23zm256-320v1216q0 66-47 113t-113 47h-352v-96q0-14-9-23t-23-9h-64q-14 0-23 9t-9 23v96h-768v-96q0-14-9-23t-23-9h-64q-14 0-23 9t-9 23v96h-352q-66 0-113-47t-47-113v-1216q0-66 47-113t113-47h1728q66 0 113 47t47 113z">
                                            </path>
                                        </svg>
                                    </span>
                                    <span className="mx-4 text-sm font-normal">
                                        Reports
                            </span>
                                </div>
                                <div className="w-full font-thin uppercase text-black dark:text-gray-200 flex items-center p-4 my-2 transition-colors duration-200 justify-start hover:text-blue-500">
                                    <span className="text-left">
                                        <svg width="20" fill="currentColor" height="20" className="h-5 w-5" viewBox="0 0 1792 1792" xmlns="http://www.w3.org/2000/svg">
                                            <path d="M1088 1256v240q0 16-12 28t-28 12h-240q-16 0-28-12t-12-28v-240q0-16 12-28t28-12h240q16 0 28 12t12 28zm316-600q0 54-15.5 101t-35 76.5-55 59.5-57.5 43.5-61 35.5q-41 23-68.5 65t-27.5 67q0 17-12 32.5t-28 15.5h-240q-15 0-25.5-18.5t-10.5-37.5v-45q0-83 65-156.5t143-108.5q59-27 84-56t25-76q0-42-46.5-74t-107.5-32q-65 0-108 29-35 25-107 115-13 16-31 16-12 0-25-8l-164-125q-13-10-15.5-25t5.5-28q160-266 464-266 80 0 161 31t146 83 106 127.5 41 158.5z">
                                            </path>
                                        </svg>
                                    </span>
                                    <span className="mx-4 text-sm font-normal">
                                        Settings
                            </span>
                                </div>
                            </div>
                        </nav>
                    </div>
                </div>


                {/* --------------------- HEADER AND SEARCH ------------------*/}
                <div className="flex flex-col w-full pl-0 md:p-4 md:space-y-4">
                    <header className="w-full shadow-lg bg-white dark:bg-gray-700 items-center h-16 rounded-2xl z-40">
                        <div className="relative z-20 flex flex-col justify-center h-full px-3 mx-auto flex-center">
                            <div className="relative items-center pl-1 flex w-full lg:max-w-68 sm:pr-2 sm:ml-0">
                                <div className="container relative left-0 z-50 flex w-3/4 h-auto h-full">

                                    {/* ----- Search Bar Had Error BELOW------ */}

                                    {/* <div className="relative flex items-center w-full lg:w-64 h-full group">
                                        <div className="absolute z-50 flex items-center justify-center block w-auto h-10 p-3 pr-2 text-sm text-gray-500 uppercase cursor-pointer sm:hidden">
                                            <svg fill="none" className="relative w-5 h-5" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" stroke="currentColor" viewBox="0 0 24 24">
                                                <path d="M10 14l2-2m0 0l2-2m-2 2l-2-2m2 2l2 2m7-2a9 9 0 11-18 0 9 9 0 0118 0z">
                                                </path>
                                            </svg>
                                        </div>
                                            <svg className="absolute left-0 z-20 hidden w-4 h-4 ml-4 text-gray-500 pointer-events-none fill-current group-hover:text-gray-400 sm:block" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20">
                                                <path d="M12.9 14.32a8 8 0 1 1 1.41-1.41l5.35 5.33-1.42 1.42-5.33-5.34zM8 14A6 6 0 1 0 8 2a6 6 0 0 0 0 12z">
                                                </path>
                                            </svg>
                                            <input type="text" className="block w-full py-1.5 pl-10 pr-4 leading-normal rounded-2xl focus:border-transparent focus:outline-none focus:ring-2 focus:ring-blue-500 ring-opacity-90 bg-gray-100 dark:bg-gray-800 text-gray-400 aa-input" placeholder="Search" />
                                        <div className="absolute right-0 hidden h-auto px-2 py-1 mr-2 text-xs text-gray-400 border border-gray-300 rounded-2xl md:block">
                                            +
                                        </div>
                                    </div> */}

                                </div>
                                <div className="relative p-1 flex items-center justify-end w-1/4 ml-5 mr-4 sm:mr-0 sm:right-auto">
                                    <div className="block relative">
                                        <img alt="profil" src="https://uploads-ssl.webflow.com/6010580d08831070b0339b25/60ac2e081a5db338cbc23534_BLKME3%202.PNG" className="mx-auto object-cover rounded-full h-10 w-10 " />
                                    </div>
                                </div>
                            </div>
                        </div>
                    </header>
                    <div className="overflow-auto h-screen pb-24 pt-2 pr-2 pl-2 md:pt-0 md:pr-0 md:pl-0 bg-brand">

                        {/* --------------------- ALL BOXES OF CONTENT GOES HERE ------------------*/}



                        {/* Box 1 */}


                        <section className="px-4 sm:px-6 lg:px-4 xl:px-6 pt-4 pb-4 sm:pb-6 lg:pb-4 xl:pb-6 space-y-4">
                            {/*<!--- Header --->*/}
                            <header className="flex items-center justify-between">
                                <h2 className="text-lg leading-6 font-medium text-black">Potlucks</h2>
                                <div onClick={createNew} >
                                    <button className="hover:bg-blue-200 hover:text-blue-800 group flex items-center rounded-md bg-blue-100 text-blue-600 text-sm font-medium px-4 py-2">
                                        <svg className="group-hover:text-blue-600 text-blue-500 mr-2" width="12" height="20" fill="currentColor">
                                            <path fill-rule="evenodd" clip-rule="evenodd" d="M6 5a1 1 0 011 1v3h3a1 1 0 110 2H7v3a1 1 0 11-2 0v-3H2a1 1 0 110-2h3V6a1 1 0 011-1z" />
                                        </svg> New </button>


                                </div>

                            </header>
                            {/*<!--- Header --->*/}

                            {/*<!--- Form --->*/}
                            <form className="relative">
                                <svg width="20" height="20" fill="currentColor" className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400">
                                    <path fill-rule="evenodd" clip-rule="evenodd" d="M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z" />
                                </svg>
                                <input className="focus:border-blue-500 focus:ring-1 focus:ring-blue-500 focus:outline-none w-full text-sm text-black placeholder-gray-500 border border-gray-200 rounded-md py-2 pl-10" type="text" aria-label="Filter projects" placeholder="Filter potlucks" />
                            </form>
                            {/*<!--- Form --->*/}

                            <ul className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-1 xl:grid-cols-2 gap-4">




                            </ul>
                        </section>



                        <div className="flex flex-col flex-wrap sm:flex-row ">
                            <div className="w-full sm:w-1/2 xl:w-1/3">

                                {/* ----- POTLUCK BOXE #1 ------ */}


                        
                                    <div className="mb-4">
                                        <div className="shadow-lg rounded-2xl p-4 bg-white dark:bg-gray-700 w-full">
                                            {/* <Food/> */}
                                            <p className="font-bold mx-5">Your New Potluck!</p><br /><hr />

                                            <Food />
                                            <form onSubmit={subby}>
                                                <p className="font-bold mx-5">Date | Time | Location</p><br /><hr />
                                                <input
                                                    type="date"
                                                    name="date_set"
                                                    value={formValues.date_set}
                                                    onChange={changeHandler}
                                                    className="appearance-none  relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-t-md focus:outline-none focus:ring-yellow-400 focus:border-yellow-400 focus:z-10 sm:text-sm"

                                                />

                                                <input
                                                    type="time"
                                                    name="time_set"
                                                    value={formValues.time_set}
                                                    onChange={changeHandler}
                                                    className="appearance-none  relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900  focus:outline-none focus:ring-yellow-400 focus:border-yellow-400 focus:z-10 sm:text-sm"

                                                />


                                                <input
                                                    type="text"
                                                    name="location"
                                                    placeholder="Location"
                                                    value={formValues.location}
                                                    onChange={changeHandler}
                                                    className="appearance-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-b-md focus:outline-none focus:ring-yellow-400 focus:border-yellow-400 focus:z-10 sm:text-sm"


                                                />

                                                <button className="mt-5  group relative w-full flex justify-center py-2 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-yellow-400 hover:bg-yellow-300  focus:outline-none focus:ring-2 focus:ring-offset-2  focus:ring-yellow-400">
                                                    <span className="absolute left-0 inset-y-0 flex items-center pl-3">
                                                    </span>
                                            Confirm
                                        </button>





                                            </form>


                                        </div>
                                    </div>








                                {/* ----- POTLUCK BOXE #1 END ------ */}


                                {/* ----- POTLUCK BOXE #2 ------ */}
                                {/* <div className="mb-4">
                                    <div className="shadow-lg rounded-2xl p-4 bg-white dark:bg-gray-700 w-full">

                                    </div>
                                </div> */}
                                {/* ----- POTLUCK BOXE #2 END ------ */}





                            </div>
                            <div className="w-full sm:w-1/2 xl:w-1/3">
                            </div>
                        </div>



                        {/* Box 1 */}


                        {/* Box 2 */}


                        {/* Box 3 */}

                        {/* Box 3 */}



                        {/* --------------------- ALL BOXES OF CONTENT ENDS HERE ------------------*/}



                    </div>
                </div>
            </div>
        </main >


    );
}
export default OrganizerDash;




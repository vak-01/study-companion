import React from "react";
import { useState, useEffect } from "react";
import axios from "axios";

function NewGoal({goals, setGoals}) {
    const [goal, setGoal] = useState("");
    const [description, setDescription] = useState("");
    const [status, setStatus] = useState("");

    const handleSubmit = async (e) => {
        e.preventDefault();
        
        let completed = false;
        axios.post("http://localhost:8000/goals/", {
            goal,
            description,
            completed
        },
        {
            headers: {
                Authorization: 'Token ' + localStorage.getItem('cp-tkn')
            }
        },).then((res) => {
            const newGoal = res.data;
            setGoals(prevGoals => [...prevGoals, newGoal]);
            setStatus("Goal successfully created !");
        })
    }

    return (
        <>
            <div className="text-center">
                <button
                    type="button"
                    className="py-2 px-3 inline-flex items-center gap-x-2 text-sm font-semibold rounded-lg border border-transparent bg-blue-600 text-white hover:bg-blue-700 disabled:opacity-50 disabled:pointer-events-none dark:focus:outline-none dark:focus:ring-1 dark:focus:ring-gray-600"
                    data-hs-overlay="#hs-notifications"
                >
                    New Goal
                </button>
            </div>
            <div
                id="hs-notifications"
                className="hs-overlay hidden w-full h-full fixed top-0 start-0 z-[80] overflow-x-hidden overflow-y-auto"
            >
                <div className="hs-overlay-open:mt-7 hs-overlay-open:opacity-100 hs-overlay-open:duration-500 mt-0 opacity-0 ease-out transition-all sm:max-w-lg sm:w-full m-3 sm:mx-auto">
                    <div className="relative flex flex-col bg-white border shadow-sm rounded-xl overflow-hidden dark:bg-gray-800 dark:border-gray-700">
                        <div className="absolute top-2 end-2">
                            <button
                                type="button"
                                className="flex justify-center items-center w-7 h-7 text-sm font-semibold rounded-lg border border-transparent text-gray-800 hover:bg-gray-100 disabled:opacity-50 disabled:pointer-events-none dark:text-white dark:border-transparent dark:hover:bg-gray-700 dark:focus:outline-none dark:focus:ring-1 dark:focus:ring-gray-600"
                                data-hs-overlay="#hs-notifications"
                            >
                                <span className="sr-only">Close</span>
                                <svg
                                    className="flex-shrink-0 w-4 h-4"
                                    xmlns="http://www.w3.org/2000/svg"
                                    width={24}
                                    height={24}
                                    viewBox="0 0 24 24"
                                    fill="none"
                                    stroke="currentColor"
                                    strokeWidth={2}
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                >
                                    <path d="M18 6 6 18" />
                                    <path d="m6 6 12 12" />
                                </svg>
                            </button>
                        </div>
                        <div className="p-4 sm:p-10 overflow-y-auto">
                            <div className="mb-6 text-center">
                                <h3 className="mb-2 text-xl font-bold text-gray-800 dark:text-gray-200">
                                    Create a New Goal
                                </h3>
                            </div>
                            <div className="space-y-4">
                                {/* Card */}
                                <div className="flex flex-col bg-white border shadow-sm rounded-xl dark:bg-gray-800 dark:border-gray-700">
                                    <label htmlFor="hs-account-activity" className="flex p-4 md:p-5">
                                        <span className="flex me-5">
                                            
                                            <span className="ms-5">
                                                <span className="block font-medium text-gray-800 dark:text-gray-200">
                                                    Goal title
                                                </span>
                                                <textarea className="mt-3 py-3 px-4 block w-full bg-gray-100 border-transparent rounded-lg text-sm focus:border-blue-500 focus:ring-blue-500 disabled:opacity-50 disabled:pointer-events-none dark:bg-gray-700 dark:border-transparent dark:text-gray-400 dark:focus:ring-gray-600" rows="1" cols="50" placeholder=""
                                                value={goal}
                                                onChange={e=>setGoal(e.target.value)}></textarea>
                                            </span>
                                        </span>

                                    </label>
                                </div>
                                {/* End Card */}
                                {/* Card */}
                                <div className="flex flex-col bg-white border shadow-sm rounded-xl dark:bg-gray-800 dark:border-gray-700">
                                    <label htmlFor="hs-meetups-near-you" className="flex p-4 md:p-5">
                                        <span className="flex me-5">
                                            <span className="ms-5">
                                                <span className="block font-medium text-gray-800 dark:text-gray-200">
                                                    Goal Description
                                                </span>
                                                <textarea className="mt-3 py-3 px-4 block w-full bg-gray-100 border-transparent rounded-lg text-sm focus:border-blue-500 focus:ring-blue-500 disabled:opacity-50 disabled:pointer-events-none dark:bg-gray-700 dark:border-transparent dark:text-gray-400 dark:focus:ring-gray-600" rows="3" cols="50" placeholder=""
                                                value={description}
                                                onChange={e=>setDescription(e.target.value)}></textarea>
                                            </span>
                                        </span>
                                        
                                    </label>
                                </div>

                                <p className="p-3 mt-3 text-center font-bold text-green-500">{status}</p>
                                {/* End Card */}
                                
                            </div>
                        </div>
                        <div className="flex justify-end items-center gap-x-2 py-3 px-4 bg-gray-50 border-t dark:bg-gray-800 dark:border-gray-700">
                            <button
                                type="button"
                                className="py-2 px-3 inline-flex items-center gap-x-2 text-sm font-medium rounded-lg border border-gray-200 bg-white text-gray-800 shadow-sm hover:bg-gray-50 disabled:opacity-50 disabled:pointer-events-none dark:bg-slate-900 dark:border-gray-700 dark:text-white dark:hover:bg-gray-800 dark:focus:outline-none dark:focus:ring-1 dark:focus:ring-gray-600"
                                data-hs-overlay="#hs-notifications"
                            >
                                Cancel
                            </button>
                            <button
                                className="py-2 px-3 inline-flex items-center gap-x-2 text-sm font-semibold rounded-lg border border-transparent bg-blue-600 text-white hover:bg-blue-700 disabled:opacity-50 disabled:pointer-events-none dark:focus:outline-none dark:focus:ring-1 dark:focus:ring-gray-600"
                                href="#"
                                onClick={handleSubmit}
                            >
                                Create goal
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default NewGoal;
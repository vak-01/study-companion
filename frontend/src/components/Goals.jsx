function Goals() {
    return (
        <>
            <div className="w-full pt-0 px-2 sm:px-6 md:px-4 lg:ps-72 min-h-screen">
                {/* <!-- Page Heading --> */}
                <div>
                    {/* <!-- Table Section --> */}
                    <div className="max-w-[85rem] px-2 py-10 sm:px-6 lg:px-8 lg:py-14 mx-auto">
                        {/* <!-- Card --> */}
                        <div className="flex flex-col">
                            <div className="-m-1.5 overflow-x-auto">
                                <div className="p-1.5 min-w-full inline-block align-middle">
                                    <div className="bg-white border border-gray-200 rounded-xl shadow-sm overflow-hidden dark:bg-slate-900 dark:border-gray-700">
                                        {/* <!-- Header --> */}
                                        <div className="px-6 py-4 grid gap-3 md:flex md:justify-between md:items-center border-b border-gray-200 dark:border-gray-700">
                                            <div>
                                                <h2 className="block text-2xl font-bold text-gray-800 sm:text-3xl dark:text-white">
                                                Learning Goals
                                                </h2>
                                                <p className="mt-2 text-lg text-gray-800 dark:text-gray-400">
                                                Break down your tasks into small and manageable chunks of work for better results
                                                </p>
                                            </div>

                                            <div>
                                                <div className="inline-flex gap-x-2">

                                                    <div className="hs-dropdown relative inline-block [--placement:bottom-right]" data-hs-dropdown-auto-close="inside">
                                                        <button id="hs-as-table-table-filter-dropdown" type="button" className="py-2 px-3 inline-flex items-center gap-x-2 text-sm font-medium rounded-lg border border-gray-200 bg-white text-gray-800 shadow-sm hover:bg-gray-50 disabled:opacity-50 disabled:pointer-events-none dark:bg-slate-900 dark:border-gray-700 dark:text-white dark:hover:bg-gray-800 dark:focus:outline-none dark:focus:ring-1 dark:focus:ring-gray-600">
                                                            <svg className="flex-shrink-0 w-3.5 h-3.5" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M3 6h18" /><path d="M7 12h10" /><path d="M10 18h4" /></svg>
                                                            Filter
                                                            <span className="inline-flex items-center gap-1.5 py-0.5 px-1.5 rounded-full text-xs font-medium border border-gray-300 text-gray-800 dark:border-gray-700 dark:text-gray-300">
                                                                2
                                                            </span>
                                                        </button>
                                                        <div className="hs-dropdown-menu transition-[opacity,margin] duration hs-dropdown-open:opacity-100 opacity-0 hidden  divide-y divide-gray-200 min-w-[12rem] z-20 bg-white shadow-md rounded-lg mt-2 dark:divide-gray-700 dark:bg-gray-800 dark:border dark:border-gray-700" aria-labelledby="hs-as-table-table-filter-dropdown">
                                                            <div className="divide-y divide-gray-200 dark:divide-gray-700">
                                                                <label htmlFor="hs-as-filters-dropdown-frequency" className="flex py-2.5 px-3">
                                                                    <input type="checkbox" className="shrink-0 mt-0.5 border-gray-300 rounded text-blue-600 focus:ring-blue-500 disabled:opacity-50 disabled:pointer-events-none dark:bg-slate-900 dark:border-gray-600 dark:checked:bg-blue-500 dark:checked:border-blue-500 dark:focus:ring-offset-gray-800" id="hs-as-filters-dropdown-frequency" />  
                                                                        <span className="ms-3 text-sm text-gray-800 dark:text-gray-200">Completed</span>
                                                                </label>
                                                                <label htmlFor="hs-as-filters-dropdown-status" className="flex py-2.5 px-3">
                                                                    <input type="checkbox" className="shrink-0 mt-0.5 border-gray-300 rounded text-blue-600 focus:ring-blue-500 disabled:opacity-50 disabled:pointer-events-none dark:bg-slate-900 dark:border-gray-600 dark:checked:bg-blue-500 dark:checked:border-blue-500 dark:focus:ring-offset-gray-800" id="hs-as-filters-dropdown-status"  />
                                                                        <span className="ms-3 text-sm text-gray-800 dark:text-gray-200">Not completed</span>
                                                                </label>
                                                                <label htmlFor="hs-as-filters-dropdown-created" className="flex py-2.5 px-3">
                                                                    <input type="checkbox" className="shrink-0 mt-0.5 border-gray-300 rounded text-blue-600 focus:ring-blue-500 disabled:opacity-50 disabled:pointer-events-none dark:bg-slate-900 dark:border-gray-600 dark:checked:bg-blue-500 dark:checked:border-blue-500 dark:focus:ring-offset-gray-800" id="hs-as-filters-dropdown-created" />
                                                                        <span className="ms-3 text-sm text-gray-800 dark:text-gray-200">Earliest deadline</span>
                                                                </label>
        
                                                            </div>
                                                        </div>
                                                    </div>

                                                    <button type="button" className="py-2 px-3 inline-flex items-center gap-x-2 text-sm font-semibold rounded-lg border border-transparent bg-blue-600 text-white hover:bg-blue-700 disabled:opacity-50 disabled:pointer-events-none dark:focus:outline-none dark:focus:ring-1 dark:focus:ring-gray-600">
                                                        New Goal
                                                    </button>
                                                </div>
                                            </div>
                                        </div>
                                        {/* <!-- End Header --> */}

                                        {/* <!-- Table --> */}
                                        <table className="min-w-full divide-y divide-gray-200 dark:divide-gray-700">
                                            <thead className="bg-gray-50 dark:bg-slate-800">
                                                <tr>
                                                    <th scope="col" className="px-6 py-3 text-start">
                                                        <a className="group inline-flex items-center gap-x-2" href="#">
                                                            <span className="text-xs font-semibold uppercase tracking-wide text-gray-800 dark:text-gray-200">
                                                                Goal
                                                            </span>
                                                            <svg className="flex-shrink-0 w-3.5 h-3.5" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="m7 15 5 5 5-5" /><path d="m7 9 5-5 5 5" /></svg>
                                                        </a>
                                                    </th>

                                                    <th scope="col" className="px-6 py-3 text-start">
                                                        <a className="group inline-flex items-center gap-x-2" href="#">
                                                            <span className="text-xs font-semibold uppercase tracking-wide text-gray-800 dark:text-gray-200">
                                                                Description
                                                            </span>
                                                            <svg className="flex-shrink-0 w-3.5 h-3.5" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="m7 15 5 5 5-5" /><path d="m7 9 5-5 5 5" /></svg>
                                                        </a>
                                                    </th>

                                                    <th scope="col" className="px-6 py-3 text-start">
                                                        <a className="group inline-flex items-center gap-x-2" href="#">
                                                            <span className="text-xs font-semibold uppercase tracking-wide text-gray-800 dark:text-gray-200">
                                                                Status
                                                            </span>
                                                            <svg className="flex-shrink-0 w-3.5 h-3.5" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="m7 15 5 5 5-5" /><path d="m7 9 5-5 5 5" /></svg>
                                                        </a>
                                                    </th>
                                                    <th scope="col" className="px-6 py-3 text-end"></th>
                                                </tr>
                                            </thead>

                                            <tbody className="divide-y divide-gray-200 dark:divide-gray-700">
                                                <tr className="bg-white hover:bg-gray-50 dark:bg-slate-900 dark:hover:bg-slate-800">
                                                    <td className="h-px w-px whitespace-nowrap">
                                                        <a className="block relative z-10" href="#">
                                                            <div className="px-6 py-2">
                                                                <div className="block text-sm text-blue-600 decoration-2 hover:underline dark:text-blue-500">Scheduling algorithms</div>
                                                            </div>
                                                        </a>
                                                    </td>
                                                    <td className="h-px w-72 min-w-[18rem]">
                                                        <a className="block relative z-10" href="#">
                                                            <div className="px-6 py-2">
                                                                <p className="text-sm text-gray-500">Learn and practice numericals on SJF, SRTF and Round robin scheduling algorithms</p>
                                                            </div>
                                                        </a>
                                                    </td>
                                                    <td className="h-px w-px whitespace-nowrap">
                                                        <a className="block relative z-10" href="#">
                                                            <div className="px-6 py-2">
                                                                <span className="inline-flex items-center gap-1.5 py-1 px-2 rounded-lg text-xs font-medium bg-gray-100 text-gray-800 dark:bg-gray-900 dark:text-gray-200">
                                                                    Completed
                                                                </span>
                                                            </div>
                                                        </a>
                                                    </td>
                                                    
                                                    <td className="h-px w-px whitespace-nowrap">
                                                        <div className="px-6 py-2">
                                                            <div className="hs-dropdown relative inline-block [--placement:bottom-right]">
                                                                <button id="hs-table-dropdown-1" type="button" className="hs-dropdown-toggle py-1.5 px-2 inline-flex justify-center items-center gap-2 rounded-lg text-gray-700 align-middle disabled:opacity-50 disabled:pointer-events-none focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-white focus:ring-blue-600 transition-all text-sm dark:text-gray-400 dark:hover:text-white dark:focus:ring-offset-gray-800">
                                                                    <svg className="flex-shrink-0 w-4 h-4" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="1" /><circle cx="19" cy="12" r="1" /><circle cx="5" cy="12" r="1" /></svg>
                                                                </button>
                                                                <div className="hs-dropdown-menu transition-[opacity,margin] duration hs-dropdown-open:opacity-100 opacity-0 hidden divide-y divide-gray-200 min-w-[10rem] z-20 bg-white shadow-2xl rounded-lg p-2 mt-2 dark:divide-gray-700 dark:bg-gray-800 dark:border dark:border-gray-700" aria-labelledby="hs-table-dropdown-1">
                                                                    <div className="py-2 first:pt-0 last:pb-0">
                                                                        <span className="block py-2 px-3 text-xs font-medium uppercase text-gray-400 dark:text-gray-600">
                                                                            Actions
                                                                        </span>
                                                                        <a className="flex items-center gap-x-3 py-2 px-3 rounded-lg text-sm text-gray-800 hover:bg-gray-100 focus:ring-2 focus:ring-blue-500 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-gray-300 dark:focus:outline-none   dark:focus:ring-1 dark:focus:ring-gray-600" href="#">
                                                                            Change Goal
                                                                        </a>
                                                                        <a className="flex items-center gap-x-3 py-2 px-3 rounded-lg text-sm text-gray-800 hover:bg-gray-100 focus:ring-2 focus:ring-blue-500 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-gray-300 dark:focus:outline-none dark:focus:ring-1 dark:focus:ring-gray-600" href="#">
                                                                            Mark as completed
                                                                        </a>
                                                                    </div>
                                                                    <div className="py-2 first:pt-0 last:pb-0">
                                                                        <a className="flex items-center gap-x-3 py-2 px-3 rounded-lg text-sm text-red-600 hover:bg-gray-100 focus:ring-2 focus:ring-blue-500 dark:text-red-500 dark:hover:bg-gray-700 dark:hover:text-gray-300" href="#">
                                                                            Delete
                                                                        </a>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </td>
                                                </tr>
                                            </tbody>
                                        </table>
                                        {/* <!-- End Table --> */}

                                        {/* <!-- Footer --> */}
                                        <div className="px-6 py-4 grid gap-3 md:flex md:justify-between md:items-center border-t border-gray-200 dark:border-gray-700">
                                            <div>
                                                <p className="text-sm text-gray-600 dark:text-gray-400">
                                                    <span className="font-semibold text-gray-800 dark:text-gray-200">1</span> Goal
                                                </p>
                                            </div>

                                            <div>
                                                <div className="inline-flex gap-x-2">
                                                    <button type="button" className="py-2 px-3 inline-flex items-center gap-x-2 text-sm font-medium rounded-lg border border-gray-200 bg-white text-gray-800 shadow-sm hover:bg-gray-50 disabled:opacity-50 disabled:pointer-events-none dark:bg-slate-900 dark:border-gray-700 dark:text-white dark:hover:bg-gray-800 dark:focus:outline-none dark:focus:ring-1 dark:focus:ring-gray-600">
                                                        <svg className="flex-shrink-0 w-4 h-4" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="m15 18-6-6 6-6" /></svg>
                                                        Prev
                                                    </button>

                                                    <button type="button" className="py-2 px-3 inline-flex items-center gap-x-2 text-sm font-medium rounded-lg border border-gray-200 bg-white text-gray-800 shadow-sm hover:bg-gray-50 disabled:opacity-50 disabled:pointer-events-none dark:bg-slate-900 dark:border-gray-700 dark:text-white dark:hover:bg-gray-800 dark:focus:outline-none dark:focus:ring-1 dark:focus:ring-gray-600">
                                                        Next
                                                        <svg className="flex-shrink-0 w-4 h-4" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="m9 18 6-6-6-6" /></svg>
                                                    </button>
                                                </div>
                                            </div>
                                        </div>
                                        {/* <!-- End Footer --> */}
                                    </div>
                                </div>
                            </div>
                        </div>
                        {/* <!-- End Card --> */}
                    </div>
                    {/* <!-- End Table Section --> */}
                </div>
                {/* <!-- End Page Heading --> */}
            </div>
        </>
    )
}

export default Goals;
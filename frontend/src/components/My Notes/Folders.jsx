import {Link} from 'react-router-dom';

function Folders(){
    return (
        <>
            <div className="w-full pt-10 px-4 sm:px-6 md:px-8 lg:ps-72 min-h-screen">
                {/* <!-- Page Heading --> */}

                <h1 className="block text-2xl font-bold text-gray-800 sm:text-3xl dark:text-white">My Folders</h1>

                {/* folders start */}
                {/* <!-- Card Section --> */}
                <div className="max-w-[85rem] px-4 py-10 sm:px-6 lg:px-8 lg:py-14 mx-auto">
                    {/* <!-- Grid --> */}
                    <div className="grid sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-4 gap-3 sm:gap-6">
                        {/* <!-- Card --> */}

                        
                        <Link
                        to = "/home/folders/notes" 
                        className="group flex flex-col bg-white border shadow-sm rounded-xl hover:shadow-md transition dark:bg-slate-900 dark:border-gray-800 dark:focus:outline-none dark:focus:ring-1 dark:focus:ring-gray-600" 
                        
                        >
                            <div className="p-4 md:p-5">
                                <div className="flex justify-between items-center">
                                    <div>
                                        <h3 className="group-hover:text-blue-600 font-semibold text-gray-800 dark:group-hover:text-gray-400 dark:text-gray-200">
                                            Operating systems
                                        </h3>
                                        <p className="text-sm text-gray-500">
                                            4 Notes
                                        </p>
                                    </div>
                                    <div className="ps-3">
                                        <svg className="flex-shrink-0 w-5 h-5 text-blue-400" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="m9 18 6-6-6-6" /></svg>
                                    </div>
                                </div>
                            </div>
                        </Link>
                        {/* <!-- End Card --> */}
                        

                        {/* folders end */}

                        {/* <!-- End Page Heading --> */}
                    </div>
                </div>
                <div className="mt-5 flex flex-col items-center gap-2 sm:flex-row sm:gap-3">
                            <a className="w-full sm:w-auto py-3 px-4 inline-flex justify-center items-center gap-x-2 text-sm font-semibold rounded-lg border border-transparent bg-blue-600 text-white hover:bg-blue-700 disabled:opacity-50 disabled:pointer-events-none dark:focus:outline-none dark:focus:ring-1 dark:focus:ring-gray-600" target="_blank">
                                Add a new Folder
                            </a>
                            {/* <a className="w-full sm:w-auto py-3 px-4 inline-flex justify-center items-center gap-x-2 text-sm font-semibold rounded-lg border border-transparent text-blue-600 hover:text-blue-800 disabled:opacity-50 disabled:pointer-events-none dark:text-blue-500 dark:hover:text-blue-400 dark:focus:outline-none dark:focus:ring-1 dark:focus:ring-gray-600" href="#">
                                <svg className="flex-shrink-0 w-4 h-4" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="m15 18-6-6 6-6" /></svg>
                                Save progress
                            </a> */}
                </div>
            </div>
        </>
    )
}

export default Folders;
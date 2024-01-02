import 'react';
import { useContext } from 'react';
import { useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';
import {Link} from 'react-router-dom';
import { AuthContext } from '../AuthContext.jsx';

function Layout(){
    useEffect(() => {
        import('preline')
      }, []);

    const location = useLocation();
    const uname = location.state?.username;
    // console.log("username is ", uname);
    const { setToken } = useContext(AuthContext);
    const navigate = useNavigate();
    const [activeLink, setActiveLink] = useState('/home');

    function logout() {

        fetch('http://localhost:8000/logout/', {
          method: 'GET',
          headers: {
            'Authorization': `Token ${localStorage.getItem('cp-tkn')}`
          }
        })
        .then(response => {
          if (response.ok) {
            localStorage.removeItem('cp-tkn');
            setToken(null);
            navigate('/'); // Redirect to landing page
          } else {
            throw new Error('Logout failed');
          }
        })
        .catch(error => console.error('Error:', error));
      }

    const handleLinkClick = (link) => {
        setActiveLink(link);
    };

    function getLinkText(activeLink) {
        if (activeLink === "/home") return "Learning goals";
        if (activeLink === "/home/folders") return "Folders";
        if (activeLink === "/home/chat") return "Chat";
        if (activeLink === "/home/folders/notes") return "Notes";
        return "Default";
      }

    const commonClasses = "flex items-center gap-x-3.5 py-2 px-2.5 text-sm text-slate-700 rounded-lg hover:bg-slate-600 dark:hover:bg-gray-900 dark:text-slate-400 dark:hover:text-slate-300 dark:focus:outline-none dark:focus:ring-1 dark:focus:ring-gray-600";
    const activeClass = "bg-gray-100 dark:bg-gray-900 dark:text-white";
    const inactiveClass = "";

    return (
        <>
            <div className="bg-gray-50 dark:bg-slate-900">
                {/* <!-- ========== HEADER ========== --> */}
                <header className="sticky top-0 inset-x-0 flex flex-wrap sm:justify-start sm:flex-nowrap z-[48] w-full bg-white border-b text-sm py-2.5 sm:py-4 lg:ps-64 dark:bg-gray-800 dark:border-gray-700">
                    <nav className="flex basis-full items-center w-full mx-auto px-4 sm:px-6 md:px-8" aria-label="Global">
                        <div className="me-5 lg:me-0 lg:hidden">
                            <a className="flex-none text-xl font-semibold dark:text-white" href="#" aria-label="Brand">Study Copilot</a>
                        </div>

                        <div className="w-full flex items-center justify-end ms-auto sm:justify-between sm:gap-x-3 sm:order-3">
                            <div className="sm:hidden">
                                <button type="button" className="w-[2.375rem] h-[2.375rem] inline-flex justify-center items-center gap-x-2 text-sm font-semibold rounded-full border border-transparent text-gray-800 hover:bg-gray-100 disabled:opacity-50 disabled:pointer-events-none dark:text-white dark:hover:bg-gray-700 dark:focus:outline-none dark:focus:ring-1 dark:focus:ring-gray-600">
                                    <svg className="flex-shrink-0 w-4 h-4" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="11" cy="11" r="8" /><path d="m21 21-4.3-4.3" /></svg>
                                </button>
                            </div>

                            <div className="hidden sm:block">
                                <label htmlFor="icon" className="sr-only">Search</label>
                                <div className="relative">
                                    <div className="absolute inset-y-0 start-0 flex items-center pointer-events-none z-20 ps-4">
                                        <svg className="flex-shrink-0 h-4 w-4 text-gray-400" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="11" cy="11" r="8" /><path d="m21 21-4.3-4.3" /></svg>
                                    </div>
                                    <input type="text" id="icon" name="icon" className="py-2 px-4 ps-11 block w-full border-gray-200 rounded-lg text-sm focus:border-blue-500 focus:ring-blue-500 disabled:opacity-50 disabled:pointer-events-none dark:bg-slate-900 dark:border-gray-700 dark:text-gray-400 dark:focus:ring-gray-600" placeholder="Search"/>
                                </div>
                            </div>

                            <div className="flex flex-row items-center justify-end gap-2">
                                <button type="button" className="w-[2.375rem] h-[2.375rem] inline-flex justify-center items-center gap-x-2 text-sm font-semibold rounded-full border border-transparent text-gray-800 hover:bg-gray-100 disabled:opacity-50 disabled:pointer-events-none dark:text-white dark:hover:bg-gray-700 dark:focus:outline-none dark:focus:ring-1 dark:focus:ring-gray-600">
                                    <svg className="flex-shrink-0 w-4 h-4" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M6 8a6 6 0 0 1 12 0c0 7 3 9 3 9H3s3-2 3-9" /><path d="M10.3 21a1.94 1.94 0 0 0 3.4 0" /></svg>
                                </button>
                                

                                <div className="hs-dropdown relative inline-flex [--placement:bottom-right]">
                                    <button id="hs-dropdown-with-header" type="button" className="ml-2 w-[2.375rem] h-[2.375rem] inline-flex justify-center items-center gap-x-2 text-sm font-semibold rounded-full border border-transparent text-gray-800 hover:bg-gray-100 disabled:opacity-50 disabled:pointer-events-none dark:text-white dark:hover:bg-gray-700 dark:focus:outline-none  hover:to-blue-700">
                                        {/* <img className="inline-block h-[2.375rem] w-[2.375rem] rounded-full ring-2 ring-white dark:ring-gray-800" src="https://images.unsplash.com/photo-1568602471122-7832951cc4c5?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=facearea&facepad=2&w=320&h=320&q=80" alt="Image Description"/> */}
                                        Logout
                                    </button>

                                    <div className="hs-dropdown-menu transition-[opacity,margin] duration hs-dropdown-open:opacity-100 opacity-0 hidden min-w-[15rem] bg-white shadow-md rounded-lg p-2 dark:bg-gray-800 dark:border dark:border-gray-700" aria-labelledby="hs-dropdown-with-header">
                                        <div className="py-3 px-5 -m-2 bg-gray-100 rounded-t-lg dark:bg-gray-700">
                                            <p className="text-sm text-gray-500 dark:text-gray-400">Signed in as</p>
                                            <p className="text-sm font-medium text-gray-800 dark:text-gray-300">{uname}</p>
                                        </div>
                                        
                                        <button className="mt-2 py-2 first:pt-0 last:pb-0" onClick={logout}>
                                            <a className="flex items-center gap-x-3.5 py-2 px-3 rounded-lg text-sm text-gray-800 hover:bg-gray-100 focus:ring-2 focus:ring-blue-500 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-gray-300">
                                                <svg className="flex-shrink-0 w-4 h-4" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2" /><circle cx="9" cy="7" r="4" /><path d="M22 21v-2a4 4 0 0 0-3-3.87" /><path d="M16 3.13a4 4 0 0 1 0 7.75" /></svg>
                                                Logout
                                            </a>
                                        </button>
                                        
                                    </div>
                                </div>
                            </div>
                        </div>
                    </nav>
                </header>
                {/* <!-- ========== END HEADER ========== --> */}

                {/* <!-- ========== MAIN CONTENT ========== --> */}
                {/* <!-- Sidebar Toggle --> */}
                <div className="sticky top-0 inset-x-0 z-20 bg-white border-y px-4 sm:px-6 md:px-8 lg:hidden dark:bg-gray-800 dark:border-gray-700">
                    <div className="flex items-center py-4">
                        {/* <!-- Navigation Toggle --> */}
                        <button type="button" className="text-gray-500 hover:text-gray-600" data-hs-overlay="#application-sidebar" aria-controls="application-sidebar" aria-label="Toggle navigation">
                            <span className="sr-only">Toggle Navigation</span>
                            <svg className="flex-shrink-0 w-4 h-4" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><line x1="3" x2="21" y1="6" y2="6" /><line x1="3" x2="21" y1="12" y2="12" /><line x1="3" x2="21" y1="18" y2="18" /></svg>
                        </button>
                        {/* <!-- End Navigation Toggle --> */}

                        {/* <!-- Breadcrumb --> */}
                        <ol className="ms-3 flex items-center whitespace-nowrap" aria-label="Breadcrumb">
                            <li className="flex items-center text-sm text-gray-800 dark:text-gray-400">
                                Home
                                <svg className="flex-shrink-0 mx-3 overflow-visible h-2.5 w-2.5 text-gray-400 dark:text-gray-600" width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M5 1L10.6869 7.16086C10.8637 7.35239 10.8637 7.64761 10.6869 7.83914L5 14" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
                                </svg>
                            </li>
                            <li className="text-sm font-semibold text-gray-800 truncate dark:text-gray-400" aria-current="page">
                            {getLinkText(activeLink)}
                            </li>
                        </ol>
                        {/* <!-- End Breadcrumb --> */}
                    </div>
                </div>
                {/* <!-- End Sidebar Toggle --> */}

                {/* <!-- Sidebar --> */}
                <div id="application-sidebar" className="hs-overlay hs-overlay-open:translate-x-0 -translate-x-full transition-all duration-300 transform hidden fixed top-0 start-0 bottom-0 z-[60] w-64 bg-white border-e border-gray-200 pt-7 pb-10 overflow-y-auto lg:block lg:translate-x-0 lg:end-auto lg:bottom-0 [&::-webkit-scrollbar]:w-2 [&::-webkit-scrollbar-thumb]:rounded-full [&::-webkit-scrollbar-track]:bg-gray-100 [&::-webkit-scrollbar-thumb]:bg-gray-300 dark:[&::-webkit-scrollbar-track]:bg-slate-700 dark:[&::-webkit-scrollbar-thumb]:bg-slate-500 dark:bg-gray-800 dark:border-gray-700">
                    <div className="px-6">
                        <a className="flex-none text-xl font-semibold dark:text-white dark:focus:outline-none dark:focus:ring-1 dark:focus:ring-gray-600" href="#" aria-label="Brand">Study Copilot</a>
                    </div>

                    <nav className="hs-accordion-group p-6 w-full flex flex-col flex-wrap" data-hs-accordion-always-open>
                        <ul className="space-y-1.5">
                            <li>
                                <Link 
                                    to="/home" 
                                    className={`${commonClasses} ${activeLink === '/home' ? activeClass : inactiveClass}`} 
                                    onClick={() => handleLinkClick('/home')}
                                >
                                <svg className="flex-shrink-0 w-4 h-4" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" ><path d="m3 9 9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z" /><polyline points="9 22 9 12 15 12 15 22" /></svg>
                                    My Learning goals
                                </Link>
                            </li>

                            <li>
                                <Link 
                                    to="/home/folders" 
                                    className={`${commonClasses} ${activeLink === '/home/folders' ? activeClass : inactiveClass}`} 
                                    onClick={() => handleLinkClick('/home/folders')}
                                >
                                <svg className="flex-shrink-0 w-4 h-4" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M2 3h6a4 4 0 0 1 4 4v14a3 3 0 0 0-3-3H2z" /><path d="M22 3h-6a4 4 0 0 0-4 4v14a3 3 0 0 1 3-3h7z" /></svg>
                                My Folders
                                </Link>
                            </li>

                            <li className="hs-accordion" id="account-accordion">
                                <button type="button" className="hs-accordion-toggle w-full text-start flex items-center gap-x-3.5 py-2 px-2.5 hs-accordion-active:text-blue-600 hs-accordion-active:hover:bg-transparent text-sm text-slate-700 rounded-lg hover:bg-gray-100 dark:bg-gray-800 dark:hover:bg-gray-900 dark:text-slate-400 dark:hover:text-slate-300 dark:hs-accordion-active:text-white dark:focus:outline-none dark:focus:ring-1 dark:focus:ring-gray-600">
                                <svg className="flex-shrink-0 w-4 h-4" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" ><path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2" /><circle cx="9" cy="7" r="4" /><path d="M22 21v-2a4 4 0 0 0-3-3.87" /><path d="M16 3.13a4 4 0 0 1 0 7.75" /></svg>
                                    My Friends

                                    <svg className="hs-accordion-active:block ms-auto hidden w-4 h-4" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="m18 15-6-6-6 6" /></svg>

                                    <svg className="hs-accordion-active:hidden ms-auto block w-4 h-4" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="m6 9 6 6 6-6" /></svg>
                                </button>

                                <div id="account-accordion-child" className="hs-accordion-content w-full overflow-hidden transition-[height] duration-300 hidden">
                                    <ul className="pt-2 ps-2">
                                        <li>
                                            <a className="flex items-center gap-x-3.5 py-2 px-2.5 text-sm text-slate-700 rounded-lg hover:bg-gray-100 dark:bg-gray-800 dark:text-slate-400 dark:hover:text-slate-300 dark:focus:outline-none dark:focus:ring-1 dark:focus:ring-gray-600" href="#">
                                                Friend 1
                                            </a>
                                        </li>
                                        <li>
                                            <a className="flex items-center gap-x-3.5 py-2 px-2.5 text-sm text-slate-700 rounded-lg hover:bg-gray-100 dark:bg-gray-800 dark:text-slate-400 dark:hover:text-slate-300 dark:focus:outline-none dark:focus:ring-1 dark:focus:ring-gray-600" href="#">
                                                Friend 2
                                            </a>
                                        </li>
                                        <li>
                                            <a className="flex items-center gap-x-3.5 py-2 px-2.5 text-sm text-slate-700 rounded-lg hover:bg-gray-100 dark:bg-gray-800 dark:text-slate-400 dark:hover:text-slate-300 dark:focus:outline-none dark:focus:ring-1 dark:focus:ring-gray-600" href="#">
                                                Friend 3
                                            </a>
                                        </li>
                                    </ul>
                                </div>
                            </li>

                            <li>
                                <Link 
                                    to="/home/chat" 
                                    className={`${commonClasses} ${activeLink === '/home/chat' ? activeClass : inactiveClass}`} 
                                    onClick={() => handleLinkClick('/home/chat')}
                                >
                                <svg className="flex-shrink-0 w-4 h-4" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect width="18" height="10" x="3" y="11" rx="2" /><circle cx="12" cy="5" r="2" /><path d="M12 7v4" /><line x1="8" x2="8" y1="16" y2="16" /><line x1="16" x2="16" y1="16" y2="16" /></svg>
                                Chat with AI
                                </Link>
                            </li>
                            
                        </ul>
                    </nav>
                </div>
                {/* <!-- End Sidebar --> */}

                {/* <!-- Content --> */}
                
                {/* <!-- End Content --> */}
                {/* <!-- ========== END MAIN CONTENT ========== --> */}
            </div>
        </>
    )
};

export default Layout;

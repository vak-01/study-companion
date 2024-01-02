import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

import Layout from "../components/Layout";
import Goals from "../components/Goals";
import Folders from "../components/My Notes/Folders";
import Chat from '../components/Chat';
import Notes from "../components/My Notes/Notes";

function Dashboard () {
    useEffect(() => {
        import('preline')
      }, []);
    
    const location = useLocation();
    const uname = location.state?.username;
    console.log(uname);

    return (
        <>
            <Layout />
            <Routes>
                <Route path='' element={<Goals />} />

                <Route path='folders/notes' element={<Notes />} />

                <Route path='folders' element={<Folders />} />

                <Route path='chat' element={<Chat />} />

                
            </Routes>
        </>
    )
};

export default Dashboard;
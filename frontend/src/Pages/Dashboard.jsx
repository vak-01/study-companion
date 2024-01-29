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
        // Load and initialize JavaScript file
        HSStaticMethods.autoInit();
        const script = document.createElement('script');
        script.src = '../../node_modules/preline/preline.js';
        document.body.appendChild(script);
    
        return () => {
          document.body.removeChild(script);
        };
      }, []);

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
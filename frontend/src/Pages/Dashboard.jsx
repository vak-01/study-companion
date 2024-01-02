import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Layout from "../components/Layout";
import Goals from "../components/Goals";
import Folders from "../components/My Notes/Folders";
import Chat from '../components/Chat';
import Notes from "../components/My Notes/Notes";

function Dashboard () {
    
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
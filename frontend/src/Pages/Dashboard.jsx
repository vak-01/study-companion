import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Layout from "../components/Layout";
import Goals from "../components/Goals";
import Folders from "../components/My Notes/Folders";

function Dashboard () {
    
    return (
        <>
            <Layout />
            <Routes>
                <Route path='' element={<Goals />} />

                <Route path='notes' element={<Folders />} />
            </Routes>
        </>
    )
};

export default Dashboard;
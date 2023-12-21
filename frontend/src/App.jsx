import React from 'react'
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { useEffect } from 'react';

import LandingPage from './Pages/LandingPage';
import Dashboard from './Pages/Dashboard';
import LoginComponent from './components/Login';
import RegisterComponent from './components/Register';

function App() {
  useEffect(() => {
    import('preline')
  }, [])

  return (
    
      <Router>

        <Routes>
          <Route path='/' element={<LandingPage />} />

          <Route path='/home/*' element={<Dashboard />} />

          <Route path='/login' element={<LoginComponent />} />

          <Route path='/signup' element={<RegisterComponent />} />

          
        </Routes>

      </Router>
    
  )
}

export default App

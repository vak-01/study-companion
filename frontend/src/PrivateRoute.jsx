import { useContext } from 'react';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { useNavigate } from 'react-router-dom';
import { useEffect } from 'react';
import { AuthContext } from './AuthContext.jsx';

// PrivateRoute component
function PrivateRoute({ children }) {
    const { token } = useContext(AuthContext);
    const navigate = useNavigate();
  
    useEffect(() => {
      if (!token) {
        navigate('/login');
      }
    }, [token, navigate]);
  
    if (!token) {
      return null;
    }
  
    return children;
  }

export default PrivateRoute;
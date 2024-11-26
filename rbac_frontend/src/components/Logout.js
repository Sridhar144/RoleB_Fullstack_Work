import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import './Logout.css';

const Logout = () => {
  const navigate = useNavigate();

  useEffect(() => {
    localStorage.removeItem('access');
    localStorage.removeItem('refresh');
    setTimeout(() => {
      navigate('/login');
      window.location.reload(); 

    }, 2000); 
  }, [navigate]);


  return (
    <div className="logout-container">
      <div className="logout-message">
        <h1>You have successfully logged out.</h1>
        <p>Redirecting you to the login page...</p>
      </div>
    </div>
  );
};

export default Logout;

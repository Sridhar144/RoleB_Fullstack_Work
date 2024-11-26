import React from 'react';
import { Link } from 'react-router-dom';
import './Home.css';

const Home = () => {
  const isLoggedIn = !!localStorage.getItem('access'); 

  return (
    <div className="home-container">
      <div className="home-overlay"></div> {}
      <div className="home-content">
        <h1>Welcome to the RBAC Application</h1>
        <p>Effortlessly manage roles and access control with style and ease.</p>
        {!isLoggedIn && (
          <Link to="/login">
            <button className="cta-button floating-button">Login</button>
          </Link>
        )}
      </div>
    </div>
  );
};

export default Home;

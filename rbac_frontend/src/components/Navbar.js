import React from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css'; 

const Navbar = () => {
  const isLoggedIn = () => {
    const access = localStorage.getItem('access');
    const refresh = localStorage.getItem('refresh');
    console.log("Access Token:", access);
    return access && refresh;
  };

  return (
    <nav className="navbar">
      <div className="logo">RBAC App</div>
      <div className="nav-links">
        <Link to="/">Home</Link>
        <Link to="/dashboard">Dashboard</Link>
        {isLoggedIn() ? (
          <Link to="/logout" className="nav-link">
            Logout
          </Link>
        ) : (
          <Link to="/login" className="nav-link">
            Login
          </Link>
        )}
        {!isLoggedIn() && <Link to="/signup">Sign Up</Link>}
      </div>
    </nav>
  );
};

export default Navbar;

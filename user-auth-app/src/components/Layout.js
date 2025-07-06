import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useAuth } from '../context/AuthContext';
import './Layout.css';

const Layout = ({ children }) => {
  const { user, logout } = useAuth();
  const navigate = useNavigate();

  const handleLogout = () => {
    logout();
    navigate('/login');
  };

  return (
    <div className="layout">
      <nav className="navbar">
        <div className="nav-container">
          <Link to="/" className="nav-logo">
            🔐 UserAuth
          </Link>
          
          <div className="nav-menu">
            {user ? (
              <>
                <Link to="/profile" className="nav-link">
                  👤 Profile
                </Link>
                <span className="nav-welcome">
                  Welcome, {user.firstName}!
                </span>
                <button onClick={handleLogout} className="nav-button logout">
                  Logout
                </button>
              </>
            ) : (
              <>
                <Link to="/login" className="nav-link">
                  Login
                </Link>
                <Link to="/register" className="nav-button primary">
                  Sign Up
                </Link>
              </>
            )}
          </div>
        </div>
      </nav>
      
      <main className="main-content">
        {children}
      </main>
    </div>
  );
};

export default Layout;
import React from 'react';
import { Link } from 'react-router-dom';
import { useAuth } from '../context/AuthContext';
import './Home.css';

const Home = () => {
  const { user } = useAuth();

  return (
    <div className="home-container">
      <div className="hero-section">
        <div className="hero-content">
          <h1 className="hero-title">
            Welcome to UserAuth
          </h1>
          <p className="hero-subtitle">
            A secure and beautiful authentication system built with React
          </p>
          
          {user ? (
            <div className="welcome-back">
              <h2>Welcome back, {user.firstName}! 👋</h2>
              <p>Ready to manage your profile?</p>
              <Link to="/profile" className="cta-button primary">
                Go to Profile
              </Link>
            </div>
          ) : (
            <div className="cta-buttons">
              <Link to="/register" className="cta-button primary">
                Get Started
              </Link>
              <Link to="/login" className="cta-button secondary">
                Sign In
              </Link>
            </div>
          )}
        </div>
        
        <div className="features-grid">
          <div className="feature-card">
            <div className="feature-icon">🔐</div>
            <h3>Secure Authentication</h3>
            <p>Your data is protected with industry-standard security measures</p>
          </div>
          
          <div className="feature-card">
            <div className="feature-icon">👤</div>
            <h3>Profile Management</h3>
            <p>Easily update and manage your personal information</p>
          </div>
          
          <div className="feature-card">
            <div className="feature-icon">✨</div>
            <h3>Beautiful UI</h3>
            <p>Modern and intuitive interface with smooth animations</p>
          </div>
          
          <div className="feature-card">
            <div className="feature-icon">📱</div>
            <h3>Responsive Design</h3>
            <p>Perfect experience across all devices and screen sizes</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
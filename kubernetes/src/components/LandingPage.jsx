// src/components/LandingPage.jsx
import React from 'react';
import { Link } from 'react-router-dom';
import './LandingPage.css';

const LandingPage = () => {
  return (
    <div className="landing-container">
      <nav className="navbar">
        <div className="logo">
          <span className="k8s-icon">⚓</span> Kubernetes Manager
        </div>
        <div className="nav-links">
          <Link to="/login" className="nav-link">Login</Link>
          <Link to="/signup" className="nav-link signup-btn">Sign Up</Link>
        </div>
      </nav>
      
      <div className="hero-section">
        <div className="hero-content">
          <h1 className="hero-title">Simplify Your Kubernetes Management</h1>
          <p className="hero-subtitle">
            Deploy, scale, and manage containerized applications with ease
          </p>
          <div className="cta-buttons">
            <Link to="/signup" className="cta-primary">Get Started</Link>
            <Link to="/demo" className="cta-secondary">View Demo</Link>
          </div>
        </div>
        <div className="hero-visual">
          <div className="k8s-animation">
            <div className="cluster-visual">
              <div className="node master"></div>
              <div className="node worker"></div>
              <div className="node worker"></div>
              <div className="pod"></div>
              <div className="pod"></div>
              <div className="pod"></div>
            </div>
          </div>
        </div>
      </div>
      
      <div className="features-section">
        <h2 className="section-title">Powerful Features</h2>
        <div className="features-grid">
          <div className="feature-card">
            <div className="feature-icon">📊</div>
            <h3>Cluster Monitoring</h3>
            <p>Real-time insights into your cluster performance and resource utilization</p>
          </div>
          <div className="feature-card">
            <div className="feature-icon">🔄</div>
            <h3>Seamless Deployments</h3>
            <p>Deploy updates with zero downtime using rolling updates and canary releases</p>
          </div>
          <div className="feature-card">
            <div className="feature-icon">🔒</div>
            <h3>Enhanced Security</h3>
            <p>Role-based access control and security policies to protect your applications</p>
          </div>
        </div>
      </div>
      
      <footer className="landing-footer">
        <p>© 2023 Kubernetes Manager. All rights reserved.</p>
      </footer>
    </div>
  );
};

export default LandingPage;
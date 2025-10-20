// src/components/Dashboard.jsx
import React from 'react';
import { useAuth } from './AuthContext';
import './Dashboard.css';

const Dashboard = () => {
  const { user, logout } = useAuth();
  
  return (
    <div className="dashboard">
      <nav className="dashboard-nav">
        <div className="nav-brand">
          <span className="k8s-icon">⚓</span> Kubernetes Manager
        </div>
        <div className="nav-user">
          <span>{user.email}</span>
          <button onClick={logout} className="logout-btn">Logout</button>
        </div>
      </nav>
      
      <div className="dashboard-content">
        <h1>Welcome to your Kubernetes Dashboard</h1>
        <p>This is a protected area that only authenticated users can access.</p>
        
        <div className="dashboard-cards">
          <div className="dashboard-card">
            <h3>Clusters</h3>
            <p>Manage your Kubernetes clusters</p>
          </div>
          <div className="dashboard-card">
            <h3>Deployments</h3>
            <p>Monitor and update your deployments</p>
          </div>
          <div className="dashboard-card">
            <h3>Nodes</h3>
            <p>Check the status of your nodes</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
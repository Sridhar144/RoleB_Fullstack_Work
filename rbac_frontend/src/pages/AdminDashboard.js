import React from 'react';
import './AdminDashboard.css';

const AdminDashboard = () => {
  return (
    <div className="dashboard-container">
      <div className="dashboard-header">
        <h1>Admin Dashboard</h1>
      </div>
      <div className="dashboard-cards">
        <div className="card">
          <h3>Manage Users</h3>
          <p>View, add, or update user details.</p>
          <button>Manage</button>
        </div>
        <div className="card">
          <h3>Permissions</h3>
          <p>Assign and revoke user roles and permissions.</p>
          <button>Configure</button>
        </div>
      </div>
    </div>
  );
};

export default AdminDashboard;

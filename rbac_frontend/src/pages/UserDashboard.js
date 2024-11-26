import React from 'react';

const UserDashboard = () => {
  return (
    <div className="dashboard-container">
      <div className="dashboard-header">
        <h1>Welcome to Your Dashboard</h1>
      </div>
      <div className="dashboard-cards">
        <div className="card">
          <h3>Your Profile</h3>
          <p>Access and update your personal details.</p>
          <button>View Profile</button>
        </div>
        <div className="card">
          <h3>Settings</h3>
          <p>Manage your account settings and preferences.</p>
          <button>Open Settings</button>
        </div>
      </div>
    </div>
  );
};

export default UserDashboard;

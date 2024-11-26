import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { getCurrentUser } from '../api/auth';
import AdminDashboard from '../pages/AdminDashboard';
import UserDashboard from '../pages/UserDashboard';

const Dashboard = () => {
  const [user, setUser] = useState(null);
  const navigate = useNavigate();

  useEffect(() => {
    const fetchUser = async () => {
      try {
        const userData = await getCurrentUser();
        setUser(userData);
      } catch {
        navigate('/login');
      }
    };
    fetchUser();
  }, [navigate]);

  if (!user) {
    return <p style={{ textAlign: 'center', fontSize: '18px' }}>Loading...</p>;
  }

  return user.role === 'admin' ? <AdminDashboard /> : <UserDashboard />;
};

export default Dashboard;

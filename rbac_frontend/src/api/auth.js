import axios from 'axios';

const API_BASE_URL = 'http://localhost:8000/api'; 

export const login = async (credentials) => {
  try {
    const response = await axios.post(`${API_BASE_URL}/auth/login`, credentials);
    return response.data;
  } catch (error) {
    throw new Error(error.response?.data?.message || 'Login failed');
  }
};

export const getCurrentUser = async () => {
  try {
    const response = await axios.get(`${API_BASE_URL}/user`, {
      headers: {
        Authorization: `Bearer ${localStorage.getItem('access')}`,
      },
    });
    return response.data;
  } catch (error) {
    throw new Error('Failed to fetch user data');
  }
};

import React, { useState } from 'react';
import axios from 'axios';
import './Form.css';  // Import your CSS file
import { useNavigate } from 'react-router-dom';

function Login() {
  
  const navigate = useNavigate();

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState(null); 

  const handleSubmit = async (e) => {
    e.preventDefault();

    const userData = {
      email,
      password,
    };

    try {
      const response = await axios.post('http://localhost:8000/api/token/', userData);
      localStorage.setItem('access', response.data.access);
      localStorage.setItem('refresh', response.data.refresh);
      console.log("access ",response.data.access)
      console.log("Refresh ",response.data.refresh)
      alert('Login successful!');
      setTimeout(() => {
      navigate('/dashboard');
      window.location.reload(); 

      })

    } catch (error) {
      setError('Invalid credentials'); 
      console.error(error.response ? error.response.data : error.message);
    }
  };

  return (
    <div className="form-container">
      <h2>Login</h2>
      <form onSubmit={handleSubmit}>
        <input
          type="email"
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
        />
        <input
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          required
        />
        <button type="submit">Login</button>
      </form>
      {error && <p className="error">{error}</p>}  {}
    </div>
  );
}

export default Login;

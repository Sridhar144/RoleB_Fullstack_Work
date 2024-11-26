import React, { useState } from "react";
import axios from "axios";
import './Form.css';  

const Signup = () => {
    const [formData, setFormData] = useState({
        username: "",
        email: "",
        password: "",
        role: "",
    });

    const [error, setError] = useState(null);

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData((prevData) => ({
            ...prevData,
            [name]: value,
        }));
    };

    const handleSubmit = async (e) => {
        e.preventDefault();

        try {
            const response = await axios.post("http://localhost:8000/api/auth/register/", formData, {
                headers: {
                    "Content-Type": "application/json",
                },
            });

            console.log("User registered successfully:", response.data);
            } catch (error) {
            setError(error.response?.data?.detail || "An error occurred during registration");
            console.error("Error during registration:", error);
        }
    };

    return (
        <div className="form-container"> {}
            <h2>Sign Up</h2>
            <form onSubmit={handleSubmit}>
                <input
                    type="text"
                    name="username"
                    placeholder="Username"
                    value={formData.username}
                    onChange={handleChange}
                    required
                />
                <input
                    type="email"
                    name="email"
                    placeholder="Email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                />
                <input
                    type="password"
                    name="password"
                    placeholder="Password"
                    value={formData.password}
                    onChange={handleChange}
                    required
                />
                <select
                    name="role"
                    value={formData.role}
                    onChange={handleChange} 
                    required
                >
                    <option value="user">User</option>
                    <option value="admin">Admin</option>
                </select>
                <button type="submit">Sign Up</button>
            </form>
            {error && <p className="error">{error}</p>} {}
        </div>
    );
};

export default Signup;

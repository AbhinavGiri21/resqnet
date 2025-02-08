import React, { useState } from "react";
import "./login.css";
import img from '../Images/images.jpeg';
import axios from "axios";
import { useNavigate } from "react-router-dom";

const Login = () => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const navigate = useNavigate();

    const handleSubmit = async (e) => {
        e.preventDefault();

        const payload = { email, password };

        try {
            const response = await axios.post("http://localhost:5000/api/login", payload);
            localStorage.setItem("token", response.data.token);
            navigate("/dashboard");

            setEmail("");
            setPassword("");
        } catch (error) {
            alert(error.response?.data?.message || "An error occurred");
            setEmail("");
            setPassword("");
        }
    };

    return (
        <div className="login-container">
            <div className="login-box">
                <div className="login-left">
                    <img src={img} alt="login" className="login-image" />
                </div>
                <div className="login-right">
                    <div className="form-wrapper">
                        <h2>Log In</h2>
                        <form onSubmit={handleSubmit} className="login-form">
                            <div className="form-group">
                                <label htmlFor="email">Email:</label>
                                <input
                                    type="email"
                                    id="email"
                                    placeholder="Enter your email"
                                    required
                                    value={email}
                                    onChange={(e) => setEmail(e.target.value)}
                                />
                            </div>
                            <div className="form-group">
                                <label htmlFor="password">Password:</label>
                                <input
                                    type="password"
                                    id="password"
                                    placeholder="Enter your password"
                                    required
                                    value={password}
                                    onChange={(e) => setPassword(e.target.value)}
                                />
                            </div>
                            <button type="submit" className="login-btn">Log In</button>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Login;

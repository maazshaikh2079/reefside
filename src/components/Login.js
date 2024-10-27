import React, { useState } from "react";
import { useNavigate } from "react-router-dom"; // Import useNavigate from react-router-dom
import "./Login.css";
import ReefSideLogo from "./ReefSideTitle.png"; // Adjust the path to your image

const Login = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const navigate = useNavigate(); // Initialize useNavigate

  const handleLogin = () => {
    if (username === "W" && password === "WD") {
      navigate("/waiter-details"); // Navigate using useNavigate
    } else if (username === "UA" && password === "A") {
      navigate("/app");
    } else if (username === "AD" && password === "M") {
      navigate("/admin");
    } else {
      setError("Invalid credentials");
    }
  };

  return (
    <div className="login-container">
      <img src={ReefSideLogo} alt="ReefSide Logo" className="logo" />
      {error && <p style={{ color: "red" }}>{error}</p>}
      <input
        type="text"
        placeholder="Username"
        value={username}
        onChange={(e) => setUsername(e.target.value)}
      />
      <input
        type="password"
        placeholder="Password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
      />
      <button onClick={handleLogin}>Login</button>
    </div>
  );
};

export default Login;
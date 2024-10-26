import React, { useRef, useState } from "react";
import { useNavigate } from 'react-router-dom';
import './Login.css';

const Login = () => {
  const [msg, setMsg] = useState("");
  const username = useRef();
  const password = useRef();
  const navigate = useNavigate();

  const login = () => {
    if (username.current.value === "Dinesh" && password.current.value === "Dinesh@123") {
      setMsg("You have logged in successfully.");
      // Redirect or perform further actions on successful login
    } else {
      setMsg("Please enter a valid username and password.");
    }
  };

  return (
    <div className="container">
      <h1>Login Form</h1>
      <input type="text" ref={username} placeholder="Username" /><br />
      <input type="password" ref={password} placeholder="Password" /><br />
      <button onClick={login}>Login</button>
      <p onClick={() => navigate('/register')} className="redirect">
        Don't have an account?
      </p>
      <hr />
      {msg && <h2>{msg}</h2>}
    </div>
  );
};

export default Login;

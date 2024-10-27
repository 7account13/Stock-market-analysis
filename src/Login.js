import React, { useRef, useState, useContext } from "react";
import { useNavigate } from 'react-router-dom';
import { UserContext } from './UserContext'; // Import UserContext
import './Login.css';

const Login = () => {
  const [msg, setMsg] = useState("");
  const username = useRef();
  const password = useRef();
  const navigate = useNavigate();
  const { login } = useContext(UserContext); // Use login function from context

  const validateEmail = (email) => {
    const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return re.test(email);
  };

  const validatePassword = (pwd) => {
    const isLengthValid = pwd.length >= 8;
    const hasNumbers = /\d/.test(pwd);
    const hasLetters = /[a-zA-Z]/.test(pwd);
    return isLengthValid && hasNumbers && hasLetters;
  };

  const handleLogin = () => {
    const email = username.current.value;
    const pwd = password.current.value;

    if (!validateEmail(email)) {
      setMsg("Please enter a valid email address.");
      return;
    }

    if (!validatePassword(pwd)) {
      if (pwd.length < 8) {
        setMsg("Password must be at least 8 characters long.");
      } else if (!/[a-zA-Z]/.test(pwd)) {
        setMsg("Password must include at least one letter.");
      } else if (!/\d/.test(pwd)) {
        setMsg("Password must include at least one number.");
      }
      return;
    }

    if (email === "dinesh@example.com" && pwd === "Dinesh@123") {
      const userData = { name: "Dinesh", email }; // Define user data
      login(userData); // Use the login function to set user
      setMsg("You have logged in successfully.");
      navigate("/dashboard");
    } else {
      setMsg("Please enter a valid username and password.");
    }
  };

  return (
    <div className="container">
      <h1>Login Form</h1>
      <input type="text" ref={username} placeholder="Email" /><br />
      <input type="password" ref={password} placeholder="Password" /><br />
      <button onClick={handleLogin}>Login</button>
      <p onClick={() => navigate('/register')} className="redirect">
        Don't have an account?
      </p>
      <hr />
      {msg && <h2>{msg}</h2>}
    </div>
  );
};

export default Login;

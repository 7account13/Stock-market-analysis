import React, { useContext } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Login from './Login';
import Register from './Register';
import Dashboard from './components/Dashboard';
import Header from './components/Header';
import { UserContext } from './UserContext';
import './index.css';

function App() {
  const { user } = useContext(UserContext); 

  return (
    <Router>
      <div className="app">
        {user && <Header />} 
        <Routes>
          <Route path="/" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route path="/dashboard" element={<Dashboard />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;

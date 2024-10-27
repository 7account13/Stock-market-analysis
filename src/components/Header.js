import React, { useContext } from 'react';
import { UserContext } from '../UserContext';
import './Header.css';

const Header = () => {
  const { user } = useContext(UserContext); 

  return (
    <header className="header">
      <h1>ZEN STOCKS</h1>
      <nav className="nav-links">
        <a href="/dashboard">Dashboard</a>
        <a href="/market">Market</a>
        <a href="/portfolio">Portfolio</a>
        <a href="/budget">Budget</a>
        <a href="/learn">Learn</a>
      </nav>
      <div className="user-details">
        <span>{user?.name || "Guest"}</span>
      </div>
    </header>
  );
};

export default Header;

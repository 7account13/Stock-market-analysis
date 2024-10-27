import React from "react";
import Footer from "./Footer";
import PortfolioOverview from "./PortfolioOverview";
import Performance from "./Performance";
import MarketNews from "./MarketNews";
import "./Dashboard.css";

function Dashboard() {
  return (
    <div className="dashboard">
      
      <main className="dashboard-content">
        <h1>User Portfolio Dashboard</h1>
        <PortfolioOverview />
        <Performance />
        <MarketNews />
      </main>
      <Footer />
    </div>
  );
}

export default Dashboard;

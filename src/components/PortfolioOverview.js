import React from "react";

function PortfolioOverview() {
  const totalValue = "Rs10,000"; 
  const dailyChange = "+Rs200 (2%)";

  return (
    <div className="portfolio-overview">
      <h2>Portfolio Overview</h2>
      <p>Total Value: {totalValue}</p>
      <p>Daily Change: {dailyChange}</p>
    </div>
  );
}

export default PortfolioOverview;

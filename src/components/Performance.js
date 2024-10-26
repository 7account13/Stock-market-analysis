import React from "react";

function Performance() {
  const topStocks = ["Stock A: +5%", "Stock B: +3%"];
  const underperformingStocks = ["Stock X: -2%", "Stock Y: -4%"];

  return (
    <div className="performance">
      <h2>Performance</h2>
      <h3>Top-Performing Stocks</h3>
      <ul>
        {topStocks.map((stock, index) => (
          <li key={index}>{stock}</li>
        ))}
      </ul>
      <h3>Underperforming Stocks</h3>
      <ul>
        {underperformingStocks.map((stock, index) => (
          <li key={index}>{stock}</li>
        ))}
      </ul>
    </div>
  );
}

export default Performance;

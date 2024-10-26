import React from "react";

function MarketNews() {
  const news = [
    "Stock A rises amid market optimism.",
    "Industry analysis shows growth potential in tech."
  ];

  return (
    <div className="market-news">
      <h2>Market News</h2>
      <ul>
        {news.map((item, index) => (
          <li key={index}>{item}</li>
        ))}
      </ul>
    </div>
  );
}

export default MarketNews;

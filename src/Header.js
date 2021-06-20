import React from "react";
import "./Header.css";

export default function Header({ score, bestScore }) {
  return (
    <header className="header">
      <h1 className="header-title">WarsawJS #56</h1>
      <div className="header-stats">
        <div className="header-stats-cell">Wynik {score}</div>
        <div className="header-stats-cell">Najlepszy wynik {bestScore}</div>
      </div>
    </header>
  );
}

import React from "react";
import "./CommandBar.css";

export default function CommandBar({ onNewGame, onReset }) {
  return (
    <div className="commands">
      <button className="command-button" onClick={onNewGame}>
        Nowa gra
      </button>
      <button className="command-button" onClick={onReset}>
        Wyczyść wyniki
      </button>
    </div>
  );
}

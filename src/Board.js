import React, { useEffect } from "react";
import "./Board.css";

export default function Board({ board, onSlide }) {
  useEffect(() => {
    document.addEventListener("keyup", onSlide);
    return () => {
      document.removeEventListener("keyup", onSlide);
    };
  }, [onSlide]);

  return (
    <main className="board">
      {board.map((value, index) => (
        <div key={index} className="board-cell">
          <div className={`board-cell-content cell-${value}`}>
            {value > 0 ? value : null}
          </div>
        </div>
      ))}
    </main>
  );
}

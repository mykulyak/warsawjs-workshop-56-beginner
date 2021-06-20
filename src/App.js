import { useRef, useState } from "react";

import Game from "mykulyak-2048";

import "./App.css";
import Header from "./Header";
import CommandBar from "./CommandBar";
import Board from "./Board";

export default function App() {
  const game = useRef(new Game(4, 1));
  const [score, setScore] = useState(0);
  const [bestScore, setBestScore] = useState(0);
  const [board, setBoard] = useState(game.current.boardData());

  const handleNewGame = () => {
    game.current.reset();
    setScore(0);
    setBoard([...game.current.boardData()]);
  };

  const handleReset = () => {
    handleNewGame();
    setBestScore(0);
  };

  const handleKeyUp = (event) => {
    const directionMap = {
      ArrowLeft: 8,
      ArrowRight: 4,
      ArrowUp: 1,
      ArrowDown: 2,
    };
    game.current.slide(directionMap[event.key]);
    setScore(game.current.score);
    setBoard(game.current.boardData());
  };

  return (
    <div className="app">
      <Header score={score} bestScore={bestScore} />
      <CommandBar onNewGame={handleNewGame} onReset={handleReset} />
      <Board board={board} onSlide={handleKeyUp} />
    </div>
  );
}

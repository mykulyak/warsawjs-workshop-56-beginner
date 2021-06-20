import { PureComponent } from "react";

import Game from "mykulyak-2048";

import "./App.css";
import Header from "./Header";
import CommandBar from "./CommandBar";
import Board from "./Board";

export default class App extends PureComponent {
  constructor(props) {
    super(props);
    this.game = new Game(4, 1);
    this.state = {
      score: 0,
      bestScore: 0,
      step: 0,
      board: this.game.boardData(),
    };
  }

  handleNewGame = () => {
    this.setState({
      step: 0,
      score: 0,
      bestScore: 0,
      board: [...this.game.boardData()],
    });
  };

  handleReset = () => {
    this.game.reset();
    this.setState({
      step: this.game.step,
      score: 0,
      bestScore: 0,
      board: this.game.boardData(),
    });
  };

  handleKeyUp = (event) => {
    const directionMap = {
      ArrowLeft: 8,
      ArrowRight: 4,
      ArrowUp: 1,
      ArrowDown: 2,
    };
    this.game.slide(directionMap[event.key]);
    this.setState({
      step: this.game.step,
      score: this.game.score,
      bestScore: 0,
      board: this.game.boardData(),
    });
  };

  render() {
    const { score, bestScore, board } = this.state;

    return (
      <div className="app">
        <Header score={score} bestScore={bestScore} />
        <CommandBar onNewGame={this.handleNewGame} onReset={this.handleReset} />
        <Board board={board} onSlide={this.handleKeyUp} />
      </div>
    );
  }
}

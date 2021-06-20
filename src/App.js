import { PureComponent } from "react";

import Game from "@mykulyak/2048";

import "./App.css";

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

  componentDidMount() {
    document.addEventListener("keyup", this.handleKeyUp);
  }

  componentWillUnmount() {
    document.removeEventListener("keyup", this.handleKeyUp);
  }

  render() {
    const { score, bestScore, board } = this.state;

    return (
      <div className="app">
        <header className="header">
          <h1 className="header-title">WarsawJS #56</h1>
          <div className="header-stats">
            <div className="header-stats-cell">Wynik {score}</div>
            <div className="header-stats-cell">Najlepszy wynik {bestScore}</div>
          </div>
        </header>
        <div className="commands">
          <button className="command-button" onClick={this.handleNewGame}>
            Nowa gra
          </button>
          <button className="command-button" onClick={this.handleReset}>
            Wyczyść wyniki
          </button>
        </div>
        <main className="board">
          {board.map((value, index) => (
            <div key={index} className="board-cell">
              <div className={`board-cell-content cell-${value}`}>
                {value > 0 ? value : null}
              </div>
            </div>
          ))}
        </main>
      </div>
    );
  }
}

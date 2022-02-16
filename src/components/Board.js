import React from "react";
import Square from "./Square"
import { connect } from 'react-redux';



class Board extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      squares: Array(9).fill(null),
      xIsNext: true,
      counter: 0,
    };
  }

  handleClick(i) {
    const { dispatch } = this.props;
    const squares = this.state.squares.slice();
    if (calculateWinner(squares) || squares[i]) {
      return;
    }
    console.log(squares);
    squares[i] = this.state.xIsNext ? 'X' : 'O';
    const action = {
      type: 'TURN',
    }
    dispatch(action);
    this.setState({squares: squares})
  }

  handleNewGame = () => {
    this.setState({
      squares: Array(9).fill(null),
      xIsNext: true,
      counter: 0
    });
  }

  renderSquare(i) {
    return (
      <Square
        value={this.state.squares[i]} 
        onClick={() => this.handleClick(i)}  
      />
    );
  }

  render() {
    const winner = calculateWinner(this.state.squares, this.state.counter);
    let status;
    if (winner === undefined) {
      status = "Draw";
    } else if (winner) {
      status = "Winner: " + winner;

    } else {
      status = "Next player: " + (this.state.xIsNext ? 'X' : 'O');
    }

    return (
      <div>
        <div className="status">{status}</div>
        <div className="board-row">
          {this.renderSquare(0)}
          {this.renderSquare(1)}
          {this.renderSquare(2)}
        </div>
        <div className="board-row">
          {this.renderSquare(3)}
          {this.renderSquare(4)}
          {this.renderSquare(5)}
        </div>
        <div className="board-row">
          {this.renderSquare(6)}
          {this.renderSquare(7)}
          {this.renderSquare(8)}
        </div>
        <button onClick={this.handleNewGame}>New Game</button> 
      </div>
    )
  }
}

function calculateWinner(squares, counter) {
  const lines = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6],
  ];

  for (let i = 0; i < lines.length; i++) {
    const [a, b, c] = lines[i];
    if (counter === 9 && !(squares[a] && squares[a] === squares[b] && squares[a] === squares[c])) {
      return;
    } else if (squares[a] && squares[a] === squares[b] && squares[a] === squares[c]) {
      return squares[a];
    }
  }
  return null;
}

Board = connect()(Board);

export default Board;
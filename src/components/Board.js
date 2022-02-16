import React from "react";
import Square from "./Square"
import { connect } from 'react-redux';
import PropTypes from 'prop-types';


class Board extends React.Component {
  constructor(props) {
    super(props);
    console.log(props);
    this.state = {
      squares: Array(9).fill(null),
      xIsNext: true,
      counter: 0,
    };
  }

  handleClick(i) {
    const squares = this.props.squares.slice();
    if (calculateWinner(squares) || squares[i]) {
      return;
    }
    squares[i] = this.props.xIsNext ? 'X' : 'O';
    const { dispatch } = this.props;
    const action = {
      type: 'TURN',
    }
    this.setState({squares: squares});
    dispatch(action);
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
        value={this.props.squares[i]} 
        onClick={() => this.handleClick(i)}  
        // onClick={() => this.props.handleClick(i)}  
      />
    );
  }

  render() {
    const winner = calculateWinner(this.props.squares, this.props.counter);
    let status;
    if (winner === undefined) {
      status = "Draw";
    } else if (winner) {
      status = "Winner: " + winner;

    } else {
      status = "Next player: " + (this.props.xIsNext ? 'X' : 'O');
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

Board.propTypes = {
  squares: PropTypes.array,
  xIsNext: PropTypes.bool,
  counter: PropTypes.number
}

const mapStateToProps = state => {
  return {
    squares: state,//.squares,
    xIsNext: state,//.xIsNext,
    counter: state//.counter
  }
}

Board = connect(mapStateToProps)(Board);

export default Board;
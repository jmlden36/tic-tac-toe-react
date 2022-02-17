import React from "react";
import Square from "./Square"
import { connect } from "react-redux";
import PropTypes from "prop-types";
import * as a from './../actions';

class Board extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      squares: Array(9).fill(null),
      xIsNext: true
    };
    console.log(props)
  }

  handleClick(i) {
    const { dispatch } = this.props;
    const squares = this.props.squares.slice();
    if (calculateWinner(squares) || squares[i]) {
      return;
    }
    console.log(squares);
    squares[i] = this.props.xIsNext ? 'X' : 'O';
    const currentXisNext = this.props.xIsNext;
    const action = a.updateBoard(i);
    dispatch(action);
    const action2 = a.turn(currentXisNext);
    dispatch(action2);
    console.log(squares[i])
  }

  handleNewGame = () => {
    this.setState({
      squares: Array(9).fill(null),
      xIsNext: true,
    });
  }

  renderSquare(i) {
    // console.log(this.props.squares[i])
    return (
      
      <Square
        value={this.props.squares[i]} 
        onClick={() => this.handleClick(i)}  
      />
    );
    
  }

  render() {
    const winner = calculateWinner(this.props.squares);
    let status;
    if (winner) {
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

function calculateWinner(squares) {
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
    if (squares[a] && squares[a] === squares[b] && squares[a] === squares[c]) {
      return squares[a];
    }
  }
  return null;
}

Board.propTypes = {
  squares: PropTypes.array,
  xIsNext: PropTypes.bool
};

const mapStateToProps = state => {
  return {
    squares: state.squares,
    xIsNext: state.xIsNext
  }
}

Board = connect(mapStateToProps)(Board);

export default Board;
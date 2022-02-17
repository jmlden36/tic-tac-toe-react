export const updateBoard = (i, board) => {
  const { squares, xIsNext } = board;
  return {
    type: 'UPDATE_BOARD',
    squares: squares,
    xIsNext: xIsNext,
    i
  }
};

export const turn = xIsNext => ({
  type: 'TURN',
  xIsNext
})
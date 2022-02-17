export default (state = {}, action) => {
  const { squares, xIsNext } = action;
  switch (action.type) {
  case 'TURN':
    return Object.assign({}, state, {
      squares: squares,
      xIsNext: xIsNext,
    });
  case 'NEW_GAME':
    return Object.assign({}, state, {
      squares: Array(9).fill(null),
      xIsNext: true,
    });
  default:
    return state;
  }
};

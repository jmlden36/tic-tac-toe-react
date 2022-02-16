export default (state = {}, action) => {
  const { squares, xIsNext, counter } = action;
  switch (action.type) {
  case 'TURN':
    const counterPlus = counter+1;
    return Object.assign({}, state, {
      squares: squares,
      xIsNext: xIsNext,
      counter: counter
    });
  case 'NEW_GAME':
    return Object.assign({}, state, {
      squares: Array(9).fill(null),
      xIsNext: true,
      counter: 0,
    });
  default:
    return state;
  }
};

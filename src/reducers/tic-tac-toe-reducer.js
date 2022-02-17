export default (state = {squares: [null, null, null, null, null, null, null, null, null], xIsNext: true, counter: 0 }, action) => {
  const { squares, xIsNext, counter } = action;
  switch (action.type) {
  case 'TURN':
    let newState = {...state};
      return newState;
  case 'NEW_GAME':
    return newState;
    // return {
    //   ...state,
    //   squares: Array(9).fill(null),
    //   xIsNext: true,
    //   counter: 0
    // }
  default:
    return state;
  }
};

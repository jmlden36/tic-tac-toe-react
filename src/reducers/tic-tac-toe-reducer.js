export default (state = {}, action) => {
  const { squares, xIsNext, counter } = action;
  switch (action.type) {
  case 'TURN':
    const counterPlus = counter+1;
    return Object.assign({}, state, {
      squares: squares,
      xIsNext: !xIsNext,
      counter: counterPlus
    })
  default:
    return state;
  }  
};

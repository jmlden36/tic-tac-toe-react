export default (state = [null, null, null, null, null, null, null, null, null], action) => {
  const {i, xIsNext } = action;
  switch (action.type) {
    case 'UPDATE_BOARD':
      let newState = [...state];
      const xOrO = xIsNext ? "X" : "O";
      newState[i] = xOrO;
      return newState;
    default:
      return state;
  }
}
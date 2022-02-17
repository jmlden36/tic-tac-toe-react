export default (state = true, action) => {
  switch (action.type) {
    case 'TURN':
      return !state;
    default:
      return state;
  }
}
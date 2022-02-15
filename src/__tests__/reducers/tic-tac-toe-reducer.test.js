import ticTacToeReducer from "../../reducers/tic-tac-toe-reducer";

describe('ticTacToeReducer', () => {
  test('Should return default state if no action type is specified', () => {
    expect(ticTacToeReducer({}, { type: null })).toEqual({});
  });

  test('Should correctly update the state to add 1 to counter and toggle xIsNext to false and change squares to the default square array with an X in square array[0]', () => {
    const currentState = {
      squares: Array(9).fill(null),
      xIsNext: true,
      counter: 0
    }
    expect(ticTacToeReducer(currentState, { type: 'TURN'})).toEqual({
      squares: [
        'X',
        null,
        null,
        null,
        null,
        null,
        null,
        null,
        null
      ],
      xIsNext: false,
      counter: 1
    })
  })
});
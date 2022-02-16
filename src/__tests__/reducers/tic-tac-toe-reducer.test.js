import ticTacToeReducer from "../../reducers/tic-tac-toe-reducer";

describe('ticTacToeReducer', () => {

  let action;
  const initialState = {
    squares: [
      null,
      null,
      null,
      null,
      null,
      null,
      null,
      null,
      null
    ],
    xIsNext: true,
    counter: 0
  }

  test('Should return default state if no action type is specified', () => {
    expect(ticTacToeReducer({}, { type: null })).toEqual({});
  });

  test('Should correctly update the state to add 1 to counter and toggle xIsNext to false and change squares to the default square array with an X in square array[0]', () => {
    const { xIsNext, counter } = initialState;

    action = {
      type: 'TURN',
      squares: [
        "X",
        null,
        null,
        null,
        null,
        null,
        null,
        null,
        null
      ],
      xIsNext: !xIsNext,
      counter: counter+1
    };

    expect(ticTacToeReducer({}, action)).toEqual({
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
    });
  });

  test('Should reset all properties to the default state', () => {
    const currentState = {
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
    }
    action = {
      type: 'NEW_GAME'
    };
    expect(ticTacToeReducer(currentState, action)).toEqual({
      squares: [
        null,
        null,
        null,
        null,
        null,
        null,
        null,
        null,
        null
      ],
      xIsNext: true,
      counter: 0
    })
  })
});
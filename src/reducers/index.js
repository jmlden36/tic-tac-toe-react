import squaresReducer from "./squares-reducer";
import xIsNextReducer from "./x-is-next-reducer";
import { combineReducers } from "redux";

const rootReducer = combineReducers({
  squares: squaresReducer,
  xIsNext: xIsNextReducer
});

export default rootReducer;

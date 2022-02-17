import React from "react";
import ReactDOM from "react-dom";
import './index.css';
import App from './components/App';
import { createStore } from 'redux';
import reducer from './reducers/tic-tac-toe-reducer';
import { Provider } from 'react-redux';

const store = createStore(reducer);

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root')
);

import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import { createStore } from 'redux';
import { Provider } from 'react-redux';

const defaultState = {
  pokemons: []
}

function reducer(state = defaultState, action) {
  switch (action.type) {
    case 'UPDATE':
      return { ...state, pokemons: [...state.pokemons, ...action.payload] }
    default:
      return state
  }
}

const store = createStore(reducer);

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
document.getElementById('root')
);

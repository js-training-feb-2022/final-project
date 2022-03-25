import { createStore } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';

const defaultState = {
  pokemons: [],
  url: 'https://pokeapi.co/api/v2/pokemon?limit=12',
  isLoading: true
}

function reducer(state = defaultState, action) {
  switch (action.type) {
    case 'UPDATE_LOADING':
      return { ...state, isLoading: action.payload }
    case 'UPDATE_URL':
      return { ...state, url: action.payload }
    case 'UPDATE':
      return { ...state, pokemons: [...state.pokemons, ...action.payload] }
    case 'CATCH':
      return {
        ...state,
        pokemons: state.pokemons.map(el => {
          if(el.name === action.payload) {
            return {
              ...el,
              isCaught: true,
            }
          }
          return el;
        })
      };
    case 'RELEASE':
      return {
        ...state,
        pokemons: state.pokemons.map(el => {
          if(el.name === action.payload) {
            return {
              ...el,
              isCaught: false,
            }
          }
          return el;
        })
      };
    default:
      return state
  }
}

const store = createStore(reducer, composeWithDevTools());

export { store };
import { combineReducers } from 'redux';
import { caughtPokemonReducer } from './caughtPokemonReducer';
export const rootReducer = combineReducers({
  caught: caughtPokemonReducer,
});

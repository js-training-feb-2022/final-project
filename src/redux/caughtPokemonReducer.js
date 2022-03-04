import { CATCH_POKEMON, RELEASE_POKEMON } from './types';
const initialState = ['1', '2'];

export const caughtPokemonReducer = (state = initialState, action) => {
  switch (action.type) {
    case CATCH_POKEMON:
      return [...state, action.payload];
    case RELEASE_POKEMON:
      return action.payload;
    default:
      return state;
  }
};

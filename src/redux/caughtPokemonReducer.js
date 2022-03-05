import { CATCH_POKEMON, RELEASE_POKEMON } from './types';
const initialState = [{ id: 1, date: '' }];

export const caughtPokemonReducer = (state = initialState, action) => {
  switch (action.type) {
    case CATCH_POKEMON:
      return [...state, action.payload];
    case RELEASE_POKEMON:
      return state.filter((item) => item.id != action.payload);
    default:
      return state;
  }
};

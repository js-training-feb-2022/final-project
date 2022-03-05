import { CATCH_POKEMON, RELEASE_POKEMON } from './types';
const initialState = [
  {
    id: 1,
    name: 'bulbasaur',
    imagePath:
      'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/1.png',
    date: '',
  },
];

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

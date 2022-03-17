import { pokemonAPI } from "../api/api";

const SET_POKEMON = "SET_POKEMON";
const SET_LOADING = "SET_LOADING";

const initialState = {
  pokemon: {
    sprites: {
      other: {
        'official-artwork': {}
      }
    },
    name: '',
  },
  isFetching: false
};

// Reducers
const pokemonPageReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_POKEMON:
      return {
        ...state,
        pokemon: {...action.pokemon}
      };
    
    case SET_LOADING:
      return {
        ...state,
        isFetching: action.isFetching
      };

    default:
      return state;
  }
};

// Action Сreators
export const setPokemonAC = (pokemon) => ({
    type: SET_POKEMON,
    pokemon
});

export const setLoadingAC = (isFetching) => ({
    type: SET_LOADING,
    isFetching
});

// Thunks
export const getPokemonPageThunk = (pokemonId) => {
    return async (dispatch) => {
      dispatch(setLoadingAC(true));
      let response = await pokemonAPI.getPokemonInfo(pokemonId);
      let result = await response;

      dispatch(setPokemonAC(result));
      dispatch(setLoadingAC(false));
    }
}

export default pokemonPageReducer;
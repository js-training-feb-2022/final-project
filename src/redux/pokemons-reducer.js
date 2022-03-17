import { pokemonAPI } from "../api/api";

const SET_POKEMONS_LIST = "SET_POKEMONS_LIST";
const SET_LOADING = "SET_LOADING";

const initialState = {
  pokemons: [],
  isFetching: false
};

// Reducers
const pokemonsReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_POKEMONS_LIST:
      return {
        ...state,
        pokemons: [...action.pokemonsArray],
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
export const setPokemonsListAC = (pokemonsArray) => ({
    type: SET_POKEMONS_LIST,
    pokemonsArray
});

export const setLoadingAC = (isFetching) => ({
    type: SET_LOADING,
    isFetching
});

// Thunks
export const getPokemonsListThunk = (pokCount) => {
    return async (dispatch) => {
      dispatch(setLoadingAC(true));
        
      let response = await pokemonAPI.getPokemons(0,pokCount);
      let results = await response.results;

      dispatch(setPokemonsListAC(results));
      dispatch(setLoadingAC(false));
    }
}

export default pokemonsReducer;
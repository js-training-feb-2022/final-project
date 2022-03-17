import { applyMiddleware, combineReducers, createStore } from "redux";
import thunkMiddleware from "redux-thunk";
import pokemonsReducer from "./pokemons-reducer";
import caughtPokemonsReducer from "./caughtPokemons-reducer";
import pokemonPageReducer from "./pokemonPage-reducer";

const reducers = combineReducers( {
  pokemons: pokemonsReducer,
  caughtPokemons: caughtPokemonsReducer,
  pokemon: pokemonPageReducer
} );

const store = createStore(reducers, applyMiddleware(thunkMiddleware));

window.store = store;

export default store;
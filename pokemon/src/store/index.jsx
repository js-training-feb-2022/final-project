import {createStore, combineReducers, applyMiddleware} from "redux";
import requestReducer from "./requestReducer";
import { composeWithDevTools } from 'redux-devtools-extension';
import thunk from "redux-thunk";

const rootReducer = combineReducers({
    pokemons: requestReducer,
})
export const store = createStore(rootReducer, composeWithDevTools(applyMiddleware(thunk)))

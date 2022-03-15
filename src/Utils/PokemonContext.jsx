import React, { createContext, useReducer, useEffect } from "react";
import AppReducer from './AppReducer';

const initialState = {
    caught: localStorage.getItem('caught') ? JSON.parse(localStorage.getItem('caught')) : [],
};

export const PokemonContext = createContext(initialState);

export const PokemonProvider = props => {
    const [state, dispatch] = useReducer(AppReducer, initialState);

    useEffect(() => {
        localStorage.setItem('caught', JSON.stringify(state.caught));
    }, [state])

    const addPokemonToCaughtList = (pokemon) => {
        dispatch({ type: "ADD_POKEMON_TO_CAUGHTLIST", payload: pokemon })
    }

    const removePokemonFromCaughtList = (name) => {
        dispatch({ type: "REMOVE_POKEMON_FROM_CAUGHTLIST", payload: name })
    }

    return (
        <PokemonContext.Provider
            value={{ caught: state.caught, addPokemonToCaughtList, removePokemonFromCaughtList }}>
            {props.children}
        </PokemonContext.Provider>
    )
}
import axios from "axios";
import {setEachPokemon, setPokemons} from "../store/requestReducer";

export const getPokemons = (searchQuery = '', res='') => {
    return (dispatch) => {
         axios.get(`https://pokeapi.co/api/v2/pokemon${searchQuery}`)
            .then(response => {
               response.data.results.map(item => {
                    if (res.indexOf(item.name) !== -1) {
                        item.isCatch = true;
                    }
                })
                dispatch(setPokemons(response.data));
            })
             .catch(e => {
                 console.log(e);
             })
    }
}

export const getEachPokemon = (searchQuery = '', catchedPokemons) => {
    return (dispatch) => {
        axios.get(`https://pokeapi.co/api/v2/pokemon/${searchQuery}/`)
            .then(response => {
                 catchedPokemons.map(item => {
                     if (item.name.indexOf(response.data.name) !== -1) {

                         response.data.date = item.date;
                     }
                 }
                )
                dispatch(setEachPokemon(response.data));
            })
            .catch(e => {
                console.log(e);
            })
    }
}

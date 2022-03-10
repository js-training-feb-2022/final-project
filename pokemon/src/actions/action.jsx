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
                dispatch(setPokemons(response.data))
            })
             .catch(e => {
                 console.log(e)
             })
    }
}

export const getEachPokemon = (searchQuery = '', catchedPokemons) => {
    return (dispatch) => {
        axios.get(`https://pokeapi.co/api/v2/pokemon/${searchQuery}/`)
            .then(response => {
                // const res = catchedPokemons.map(item => {
                //     return item.name
                // })
                 catchedPokemons.map(item => {
                    if (item.name.indexOf(response.data.name) !== -1) {
                        response.data.date = item.data
                        // console.log(response.data)
                    }
                })
                dispatch(setEachPokemon(response.data))
                // console.log(response.data)
            })
            .catch(e => {
                console.log(e)
            })
    }
}

// export const catchPokemon = () => {
//
// }

// export const getImages = (searchQuery='') => {
//     return (dispatch) => {
//         axios.get(`https://pokeapi.co/api/v2/pokemon/${searchQuery.toString()}`)
//             .then(response => {
//                 console.log(response.data.sprites.other['official-artwork'].front_default)
//                 dispatch(setImages(response.data.sprites.other['official-artwork'].front_default))
//             })
//             .catch(e => {
//                 console.log(e)
//             })
//     }
// }


// export const getRepos = (searchQuery = "stars:%3E1") => {
//     return async (dispatch) => {
//         const response = await axios.get(`https://api.github.com/search/repositories?q=${searchQuery}&sort=stars`)
//         dispatch(setRepos(response.data))
//     }
// }

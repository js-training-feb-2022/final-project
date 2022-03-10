const SET_POK = `SET_POK`;
const SET_EACH = `SET_EACH`;
const SET_CATCH = `SET_CATCH`;
const RELEASE_POK = `RELEASE_POK`;

const defaultState = {
    items: [],
    eachPokemon: [],
    isFetching: false,
    isFetchingEach: false,
    catchedPokemons: [],
    // catchedPokemons: [{name: 'name', id: '122'}, {name: 'name', id: '122'}],
}

export default function requestReducer(state = defaultState, action) {
    switch (action.type) {
        case SET_POK:
            return {
                ...state,
                items:  action.payload,
                isFetching: true,
            }
        case SET_EACH:
            return {
                ...state,
                eachPokemon: action.payload,
                isFetchingEach: true,
            }
        case SET_CATCH:
            return {
                ...state,
                catchedPokemons: [...state.catchedPokemons, action.payload],
            }
        case RELEASE_POK:
            return{
                ...state,
                catchedPokemons: state.catchedPokemons.filter((item) => item.name !== action.payload)
            }
        default:
            return state
    }
}

export const setPokemons = (pokemons) => ({type: SET_POK, payload: pokemons})
export const setEachPokemon = (pokemon) => ({type: SET_EACH, payload: pokemon})
export const setCatchedPokemon = (catchedPokemon) => ({type: SET_CATCH, payload: catchedPokemon})
export const releasePokemons = (Pokemon) => ({type: RELEASE_POK, payload: Pokemon})


// export const setImages = (images) => ({type: SET_IMG, payload: images})
// export const setPokemons = (poks) => ({type: SET_POK, payload: poks})

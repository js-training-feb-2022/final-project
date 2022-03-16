const SET_POK = `SET_POK`;
const SET_EACH = `SET_EACH`;
const SET_CATCH = `SET_CATCH`;
const RELEASE_POK = `RELEASE_POK`;
const SET_ISBACK = `SET_ISBACK`;


const defaultState = {
    items: [],
    eachPokemon: [],
    isFetching: false,
    isFetchingEach: false,
    catchedPokemons: [],
    isBack: false,
}

export default function requestReducer(state = defaultState, action) {
    switch (action.type) {
        case SET_POK:
            return {
                ...state,
                items: action.payload,
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
            return {
                ...state,
                catchedPokemons: state.catchedPokemons.filter((item) => item.name !== action.payload)
            }
        case SET_ISBACK:
            return {
                ...state,
                isBack: action.payload
            }
        default:
            return state
    }
}

export const setPokemons = (pokemons) => ({type: SET_POK, payload: pokemons});
export const setEachPokemon = (pokemon) => ({type: SET_EACH, payload: pokemon});
export const setCatchedPokemon = (catchedPokemon) => ({type: SET_CATCH, payload: catchedPokemon});
export const releasePokemons = (Pokemon) => ({type: RELEASE_POK, payload: Pokemon});
export const setIsBack = (isBack) => ({type: SET_ISBACK, payload: isBack});

import { format } from 'date-fns';

export default (state, action) => {
    switch(action.type){
        case "ADD_POKEMON_TO_CAUGHTLIST":
            action.payload.date = format(new Date(), 'dd MMM yyyy');
            return {                
                ...state,
                caught: [action.payload, ...state.caught],
            };
        case "REMOVE_POKEMON_FROM_CAUGHTLIST":
            return {
                ...state,
                caught: state.caught.filter(p => p.name !== action.payload)
            }
        default:
            return state
    }
}
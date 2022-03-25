import { createContext } from "react"

const PokemonContext = createContext({

})

export const PokemonProvider = () => {
    return (
        <PokemonContext.Provider value={}>
        </PokemonContext.Provider>
    )
}
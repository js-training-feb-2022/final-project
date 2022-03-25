import {useHttp} from '../hooks/http.hook'

const usePokemonService = () => {
    const {loading, request, error, clearError} = useHttp();
    const _apiBase = 'https://pokeapi.co/api/v2/pokemon';
    const _baseOffset = 0;

    const getPokemons = async (offset = _baseOffset) => {
        const res = await request(`${_apiBase}?limit=15&offset=${offset}`);
        return _transformPokemons(res, offset)
    }

    const getPokemon = async (id) => {
        const res = await request(`${_apiBase}/${id}`)
        return _transformPokemon(res)
    }

   const _transformPokemons = (res, offset) => {
        return res.results.map((item, i) => {
            return {
                name: item.name,
                id: i + 1 + offset
            }
        })

        
    }

    const _transformPokemon = (res) => {
        const abilities = res.abilities.map((item) => item.ability.name)
        const types = res.types.map((item) => item.type.name)

        return {
            id: res.id,
            name: res.name,
            weight: res.weight,
            thumbnail: res.sprites.other['official-artwork'].front_default,
            abilities: abilities,
            types: types,
            isCathed: false,
            dateCathed: null
        }
    }

    return {loading, error, clearError, getPokemon, getPokemons}
}



export default usePokemonService;
const getPokemonId = (url) => url.replace('https://pokeapi.co/api/v2/pokemon/', '').replace('/', '');

export default getPokemonId;
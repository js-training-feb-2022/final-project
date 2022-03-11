import axios from 'axios';
const HTTP = axios.create({
  baseURL: 'https://pokeapi.co/api/v2/',
});
export async function getPokemonList(limit = 20, offset = 0) {
  const response = await HTTP.get(`pokemon?limit=${limit}&offset=${offset}`);
  return response.data.results;
}
export async function getPokemon(id) {
  const response = await HTTP.get(`pokemon/${id}`);
  return response.data;
}
export async function getImages(idList) {
  const response = await axios.get(
    `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/${id}.png`,
  );
}

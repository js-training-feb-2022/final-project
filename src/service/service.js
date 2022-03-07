import axios from 'axios';
const HTTP = axios.create({
  baseURL: 'https://pokeapi.co/api/v2/',
});
export async function getPokemonList(offset = 0) {
  const response = await HTTP.get(`pokemon?limit=20&offset=${offset}`);
  return response.data.results;
}
export async function getPokemon(id) {
  const response = await HTTP.get(`pokemon/${id}`);
  return response.data;
}

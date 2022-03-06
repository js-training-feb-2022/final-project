import axios from 'axios';
const HTTP = axios.create({
  baseURL: 'https://pokeapi.co/api/v2/',
});
export async function getPokemonList() {
  const response = await HTTP.get('pokemon?limit=20');
  return response.data.results;
}
export async function getPokemon(id) {
  const response = await HTTP.get(`pokemon/${id}`);
  console.log(response.data);
  return response.data;
}

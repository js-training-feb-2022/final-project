import axios from 'axios';
const HTTP = axios.create({
  baseURL: 'https://pokeapi.co/api/v2/',
});
export async function getPokemonList() {
  const response = await HTTP.get('pokemon?limit=20');
  return response.data.results;
}
export async function getPokemon() {
  const response = await HTTP.get('pokemon?limit=20');
  return response.data.results;
}

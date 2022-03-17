import axios from "axios";

export const pokemonAPI = {
    getPokemons(id,pokCount) {
      return axios.get(`https://pokeapi.co/api/v2/pokemon?offset=${id}&limit=${pokCount}`)
      .then((res) => res.data)
    },
    getPokemonInfo(id) {
      return axios.get(`https://pokeapi.co/api/v2/pokemon/${id}`)
      .then((res) => res.data)
    }
};
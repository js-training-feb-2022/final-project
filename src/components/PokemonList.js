import React, { useState, useEffect} from "react";
import axios from "axios";
import PokemonCard from "./PokemonCard";
import baseUrl from "../constant";

const PokemonList = () => {
  const [pokemonData, setPokemonData] = useState(null);
  const [nextUrl, setNextUrl] = useState(null);
  const [nextUrlCalled, setNextUrlCalled] = useState(false);
  
  const getPokemons = (url) => {
    axios.get(url).then((response) => {
      const resp = [];
      response.data.results.forEach(async (res) => {
        resp.push({name: res.name, url: res.url })
      });
      if (pokemonData) {
        const allPokemons = pokemonData.concat(resp);
        setPokemonData(allPokemons);
      } else {
        setPokemonData(resp);
      }
      setNextUrl(response.data.next);
    });
  }

  useEffect(() => {
    getPokemons(`${baseUrl}?limit=12`);
  }, [])

  useEffect(() => {    
    nextUrl && getPokemons(nextUrl);
  }, [nextUrlCalled])

  const loadMore = () => {
    setNextUrlCalled(!nextUrlCalled);
  };
      
  return (
    <>
      <div className="pokemon-list">
        {pokemonData && pokemonData.map((pokemon, index) => (      
            <PokemonCard 
              link={`/description/${index+1}`}
              name={pokemon.name}
              id={index+1}
              key={pokemon.name}
              url={pokemon.url}
            />
        ))}
      </div>
      <div className="load-more-wrapper">
        <button onClick={loadMore} className="load-more-button">Load more Pokemons
        </button>
      </div>
    </>
  )
}

export default PokemonList;
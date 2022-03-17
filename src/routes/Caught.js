import React, { useState, useEffect} from "react";
import axios from "axios";
import baseUrl from "../constant";
import PokemonCard from "../components/PokemonCard";

const Caught = () => {
  const [pokemonData, setPokemonData] = useState(null);
  const [release, setRelease] = useState(false);
  
  useEffect(() => {
   axios.get(baseUrl).then((response) => {
     const resp = [];
     response.data.results.forEach(async (res, index) => {
       resp.push({id: index+1, name: res.name, url: res.url })
     });
     setPokemonData(resp);
   });
  }, [])

  const handleRelease = () => {
    setRelease(!release);
  }

  const caughtPokemonData = pokemonData && pokemonData
    .filter((pokemon) => Object.keys(localStorage).includes(pokemon.id.toString()));

  return (
    <>
      <div className="heading-wrapper">
        <h2>Look at pokemons you caught!</h2>
      </div>
      <div className="pokemon-list">
        {caughtPokemonData && caughtPokemonData.map((pokemon) => ( 
          <PokemonCard 
            link={`/description/${pokemon.id}`}
            name={pokemon.name}
            id={pokemon.id}
            key={pokemon.id}
            url={pokemon.url}
            release={handleRelease}
          />    
        ))}
      </div>
    </>
  )  
} 

export default Caught;
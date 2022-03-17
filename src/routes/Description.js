import React, { useState, useEffect } from "react";
import { useParams } from 'react-router-dom';
import axios from "axios";
import baseUrl from "../constant";

const Description = () => {
  const [pokemonData, setPokemonData] = useState(null); 
  const { id } = useParams();

  useEffect(() => {
    axios.get(`${baseUrl}/${id}`).then((response) => {
      setPokemonData(response.data);
    });
  }, [])

  if (!pokemonData) return null;  

  const getCatchDate = () => {
    return JSON.parse(localStorage.getItem(id));
  } 
  
  return (
    <>   
      <h2 className="pokemon-profile">Pokemon's profile</h2>
      <div className="description-wrapper">
        <div className="pokemon-img-desc">
          <img src={pokemonData.sprites.other['official-artwork'].front_default} alt={pokemonData.name} className="img-desc"/>
        </div>
        <div className="description-text">
          <div className="pokemon-details">
            <span className="definition-desc">Name: </span>{pokemonData.name}
          </div>
          <div className="pokemon-details">
            <span className="definition-desc">Catch date: </span>{getCatchDate()}
          </div>
          <div className="pokemon-details">
            <ul>
              <span className="definition-desc">Abilities:</span>
              {pokemonData.abilities.map((item) => {
                return (
                  <li key={item.ability.name}> {item.ability.name}</li>
                )
              })}
            </ul>
          </div>
          <div className="pokemon-details">
            <ul>
              <span className="definition-desc">Types:</span>
              {pokemonData.types.map((item) => {
                return (
                  <li key={item.type.name}>{item.type.name}</li>
                )
              })}
            </ul>
          </div>
          <div className="pokemon-details">
            <span className="definition-desc">Weight: </span>{pokemonData.weight}
          </div>
        </div>
      </div> 
    </>
  )
} 

export default Description;
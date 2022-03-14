import React, { useContext, useState } from 'react';
import { PokemonContext } from '../Context/PokemonContext';

export default function CatchButtonContainer({pokemon, index}) {
  const{capturedPokemonList, setCapturedPokemon} = useContext(PokemonContext);
  const[disabled, setDisabled] = useState(false);
  function capture(){
    pokemon.index = index;
    pokemon.date = new Date()
    setCapturedPokemon([...capturedPokemonList, pokemon])  
    setDisabled(true) 
  };
  const isCaptured = capturedPokemonList.find(item=>item.name===pokemon.name);

  return (
    <button className='catch-button' onClick={capture} disabled={isCaptured ? true :disabled}>Catch Pokemon</button>
    )
};

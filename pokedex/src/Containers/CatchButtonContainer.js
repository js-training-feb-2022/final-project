import React, { useContext, useState } from 'react';
import { PokemonContext } from '../Context/PokemonContext';
import PropTypes from 'prop-types';

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

CatchButtonContainer.propTypes = {
  pokemon: PropTypes.object.isRequired,
  index : PropTypes.number.isRequired
}
CatchButtonContainer.defaultProps={
  pokemon: {
    name: 'Some pokemon'
  },
  index: 0,
}


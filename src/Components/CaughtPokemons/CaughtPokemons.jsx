import React from 'react';

function CatchedPokemons(props) {
  return (
    <div>
      <h1>Caught pokemons</h1>
      <div className='pokemons'>{props.pokemonsList}</div>
    </div>
  );
}

export default CatchedPokemons;


import React, { useState }from 'react';
import { useLocation } from 'react-router-dom';

export default function MyPokemons() {
  const location = useLocation();
  const { pokemonData } = location.state.pokemonData;

  return (
    <div>
      <h2>Pokemon</h2>
    </div>
  );
}
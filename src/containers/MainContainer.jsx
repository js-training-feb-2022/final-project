import React, { useEffect, useState } from 'react';
import { Main } from '../components/Main/Main';
export function MainContainer() {
  const [pokemonList, setPokemonList] = useState();
  function handleOnClick() {
    const pokemons = getPokemonList();
    setPokemonList(pokemons);
  }
  useEffect(() => {
    const pokemons = getPokemonList();
    setPokemonList(pokemons);
  }, []);
  return <Main list={pokemonList} onClick={handleOnClick} />;
}

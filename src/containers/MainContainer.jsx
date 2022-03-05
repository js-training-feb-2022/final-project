import React, { useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';
import { Main } from '../components/Main/Main';
import { getPokemonList } from '../service/service';
export function MainContainer() {
  const [pokemonList, setPokemonList] = useState();

  function handleOnClick() {
    console.log('clicked');
  }
  async function loadPokemonList() {
    const response = await getPokemonList();
    setPokemonList(response.map((item, id) => ({ ...item, id: id + 1 })));
  }
  useEffect(() => loadPokemonList(), []);
  return pokemonList ? <Main list={pokemonList} /> : <div>Loading...</div>;
}

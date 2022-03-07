import React, { useEffect, useState } from 'react';
import { Main } from '../components/Main/Main';
import { getPokemonList } from '../service/service';

const OFFSET = 20;
export function MainContainer() {
  const [pokemonList, setPokemonList] = useState([]);
  const [currentPage, setCurrentPage] = useState(0);
  async function loadPokemonList() {
    const response = await getPokemonList(currentPage * OFFSET);
    setPokemonList([
      ...pokemonList,
      ...response.map((item, id) => ({
        ...item,
        id: currentPage * OFFSET + id + 1,
      })),
    ]);
    setCurrentPage(currentPage + 1);
  }
  useEffect(() => loadPokemonList(), []);
  return pokemonList.length > 0 ? (
    <Main list={pokemonList} onClick={() => loadPokemonList()} />
  ) : (
    <div></div>
  );
}

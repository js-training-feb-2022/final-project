import React, { useEffect, useState } from 'react';
import { Main } from '../components/Main/Main';
import { getImages, getPokemonList } from '../service/service';
import { CustomButton } from '../UI/CustomButton/CustomButton';

const OFFSET = 20;
export function MainContainer() {
  const [pokemonList, setPokemonList] = useState([]);
  const [currentPage, setCurrentPage] = useState(0);
  let isOver = false;
  function formatList(data) {
    return data.map((item, id) => ({
      ...item,
      id: currentPage * OFFSET + id + 1,
    }));
  }
  async function loadPokemonList() {
    const response = await getPokemonList(OFFSET, currentPage * OFFSET);
    if (response.length === 0) {
      isOver = true;
    }
    setPokemonList([...pokemonList, ...formatList(response)]);
    setCurrentPage(currentPage + 1);
  }
  useEffect(() => loadPokemonList(), []);
  return pokemonList.length > 0 ? (
    <main className='page'>
      <Main list={pokemonList} />
      {isOver ? (
        ''
      ) : (
        <CustomButton
          type={'Catch'}
          title={'Load More'}
          onClick={() => loadPokemonList()}
        />
      )}
    </main>
  ) : (
    ''
  );
}

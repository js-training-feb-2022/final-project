import React, { useState } from 'react';
import { useSelector } from 'react-redux';
import { Main } from '../components/Main/Main';
export function CaughtPokemonsContainer() {
  const caughtList = useSelector((state) => state.caught);
  return (
    <main className='page'>
      <Main list={caughtList} />
    </main>
  );
}

import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { catchPokemon, releasePokemon } from '../redux/actions';
import { PokemonCard } from '../components/PokemonCard/PokemonCard';
import { getCurrentDate } from '../common/getCurrentDate';

export function PokemonCardContainer({ id, name, imagePath }) {
  const caughtList = useSelector((state) => state.caught);
  const status = caughtList.find((item) => item.id == id);
  const dispatch = useDispatch();
  function catchPokemonHandler(id) {
    dispatch(catchPokemon({ id, date: getCurrentDate() }));
  }
  function releasePokemonHandler(id) {
    const res = caughtList.filter((item) => item.id != id);
    dispatch(releasePokemon(id));
  }
  function handleOnClick(id) {
    if (status) {
      releasePokemonHandler(id);
    } else catchPokemonHandler(id);
  }
  return (
    <PokemonCard
      id={id}
      name={name}
      imagePath={imagePath}
      status={status}
      state={status ? 'Release' : 'Catch'}
      onClick={() => handleOnClick(id)}
    />
  );
}

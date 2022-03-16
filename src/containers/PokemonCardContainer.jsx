import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { catchPokemon, releasePokemon } from '../redux/actions';
import { PokemonCard } from '../components/PokemonCard/PokemonCard';
import { getCurrentDate } from '../auxilary/getCurrentDate';
import { getPokemonStatus } from '../auxilary/getPokemonStatus';

export function PokemonCardContainer({ id, name, imagePath }) {
  const link = `/pokemon/${id}`;
  const status = getPokemonStatus(id);
  const dispatch = useDispatch();
  function catchPokemonHandler(id) {
    dispatch(catchPokemon({ id, name, imagePath, date: getCurrentDate() }));
  }
  function releasePokemonHandler(id) {
    dispatch(releasePokemon(id));
  }
  function handleOnClick(id) {
    if (status) {
      releasePokemonHandler(id);
    } else catchPokemonHandler(id);
  }
  return (
    <PokemonCard
      id={'#' + id.toString().padStart(3, 0)}
      name={name}
      imagePath={imagePath}
      link={link}
      state={status ? 'Release' : 'Catch'}
      onClick={() => handleOnClick(id)}
    />
  );
}

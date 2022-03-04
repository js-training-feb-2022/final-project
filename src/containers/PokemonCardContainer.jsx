import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { catchPokemon, releasePokemon } from '../redux/actions';
import { PokemonCard } from '../components/PokemonCard/PokemonCard';
export function PokemonCardContainer({ id, name, imagePath }) {
  const caughtList = useSelector((state) => state.caught);
  const status = caughtList.find((ids) => ids == id);
  const dispatch = useDispatch();
  function catchPokemonHandle(id) {
    dispatch(catchPokemon(id));
  }
  function releasePokemonHandler(id) {
    console.log('release', id);
    const res = caughtList.filter((index) => index != id);
    console.log(res);
    dispatch(releasePokemon(res));
  }
  function handleOnClick(id) {
    if (status) {
      releasePokemonHandler(id);
    } else catchPokemonHandle(id);
  }
  return (
    <PokemonCard
      id={id}
      name={name}
      imagePath={imagePath}
      status={status ? 'Release' : 'Catch'}
      onClick={() => handleOnClick(id)}
    />
  );
}

// const mapStateToProps = (state) => {
//   return {
//     caughtList: state.caught.caught,
//   };
// };
// export default connect(mapStateToProps, null)(PokemonCardContainer);

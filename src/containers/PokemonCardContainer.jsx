import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { catchPokemon } from '../redux/actions';
import { PokemonCard } from '../components/PokemonCard/PokemonCard';
export function PokemonCardContainer({ id, name, imagePath }) {
  const status = useSelector((state) => state.caught.find((ids) => ids == id));
  const [pokemonStatus, setPokemonStatus] = useState(status);
  const dispatch = useDispatch();
  function handleOnClick(id) {
    dispatch(catchPokemon(id));
  }
  // async function loadPokemonList() {
  //   const response = await getPokemonList();
  //   console.log(response);
  //   setPokemonStatus(response);
  // }
  // useEffect(() => loadPokemonList(), []);
  return (
    <PokemonCard
      id={id}
      name={name}
      imagePath={imagePath}
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

import React from 'react';
import { PokeContext } from '../App';
import { sortBy } from 'lodash';
import PokemonCardContainer from '../Containers/PokemonCardContainer';
import CaughtPokemons from '../Components/CaughtPokemons/CaughtPokemons';


function CatchedPokemonsContainer() {
  const { catched } = React.useContext(PokeContext);
  const sortedPokemons = sortBy(catched, 'id');
  const pokemonsList = sortedPokemons.map(({ name, url }) => <PokemonCardContainer name={name} url={url} />);

  return <CaughtPokemons pokemonsList={pokemonsList} />
}

export default CatchedPokemonsContainer;

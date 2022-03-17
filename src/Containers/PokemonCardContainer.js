import React from 'react';
import capitalize from '../Utils/capitalize';
import getDate from '../Utils/getDate';
import getPokemonId from '../Utils/getPokemonId';
import { PokeContext } from '../App';
import PokemonCard from '../Components/PokemonCard/PokemonCard';
import { find } from 'lodash';

function PokemonCardContainer(props) {
  const { catched, setCatched } = React.useContext(PokeContext);

  const pokemonId = getPokemonId(props.url);
  const isCaught = find(catched, ['name', props.name]);
  const pokemonName = capitalize(props.name);
  const pokemonUrl = '/' + pokemonId;

  const catchPokemon = () => {
    const catchDate =  getDate();
    setCatched([...catched, { name: props.name, id: pokemonId, url: props.url, date: catchDate }])
  }

  const releasePokemon = () => {
    const filteredPokemons = catched.filter(({ name }) => name !== props.name);
    setCatched(filteredPokemons);
  }

  const buttonData = isCaught ? { action: releasePokemon, class: 'danger', name: 'Release' } : { action: catchPokemon, class: 'success', name: 'Catch' };

  return (
    <PokemonCard name={pokemonName} pokemonId={pokemonId} url={pokemonUrl} buttonData={buttonData}/>
  );
}

export default PokemonCardContainer;

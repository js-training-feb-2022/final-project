import React from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';
import capitalize from '../Utils/capitalize';
import { PokeContext } from '../App';
import { find } from 'lodash';
import Pokemon from '../Components/PokemonPage/Pokemon';

function PokemonPageContainer() {
  const { pokemonId } = useParams(null);
  const [pokemon, setPokemon] = React.useState(null);
  const { catched } = React.useContext(PokeContext);

  React.useEffect(() => {
    axios.get('https://pokeapi.co/api/v2/pokemon/' + pokemonId).then(({ data }) => setPokemon(data));
  }, []);

  if (!pokemon) return <div>Loading...</div>;

  const image =  pokemon.sprites.other ? pokemon.sprites.other['official-artwork'].front_default : '';
  const isCaught = find(catched, ['name', pokemon.name]);
  const pokeballClass = `pokeball ${isCaught ? '' : 'pokeball-disabled'}`
  const pokemonName = capitalize(pokemon.name);
  const pokemonWeight = pokemon.weight;
  const pokemonAbilities = pokemon.abilities;
  const pokemonTypes = pokemon.types;
  const caughtDate = isCaught ? <div className='pokemonDate'><b>Caught:</b> {isCaught.date}</div> : <></>;

  return (
    <Pokemon pokemonName={pokemonName} image={image} pokemonId={pokemonId} pokemonWeight={pokemonWeight} pokeballClass={pokeballClass} pokemonAbilities={pokemonAbilities} pokemonTypes={pokemonTypes} caughtDate={caughtDate}/>
  );
}

export default PokemonPageContainer;

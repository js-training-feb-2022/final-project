import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { getImageUrl } from '../auxilary/getImageUrl';
import { getPokemonStatus } from '../auxilary/getPokemonStatus';
import { PokemonPage } from '../components/PokemonPage/PokemonPage';
import { getPokemon } from '../service/service';

export function PokemonPageContainer() {
  const { pokemonId } = useParams();
  const [pokeData, setPokeData] = useState();
  const status = getPokemonStatus(pokemonId);
  async function loadPokemonData() {
    const data = await getPokemon(pokemonId);
    setPokeData(data);
  }
  function getStats(list, statName) {
    return list.map((stat) => stat[statName].name).join(', ');
  }
  useEffect(() => loadPokemonData(), []);
  return pokeData ? (
    <PokemonPage
      id={'#' + pokeData.id.toString().padStart(3, '0')}
      name={pokeData.name}
      weight={pokeData.weight}
      imagePath={getImageUrl(pokeData.id)}
      abilities={getStats(pokeData.abilities, 'ability')}
      types={getStats(pokeData.types, 'type')}
      status={status ? `Caught in the wild ${status.date}` : ''}
    />
  ) : (
    <div>Loading...</div>
  );
}

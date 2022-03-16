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
    return list.map((stat) => stat[statName].name);
  }
  function getBaseStats(list) {
    return list.map((item) => ({ stat: item.base_stat, name: item.stat.name }));
  }
  useEffect(() => loadPokemonData(), []);
  return pokeData ? (
    <PokemonPage
      id={'#' + pokeData.id.toString().padStart(3, '0')}
      name={pokeData.name}
      weight={(pokeData.weight / 10).toFixed(1)}
      height={(pokeData.height / 10).toFixed(1)}
      imagePath={getImageUrl(pokeData.id)}
      abilities={getStats(pokeData.abilities, 'ability')}
      types={getStats(pokeData.types, 'type')}
      stats={getBaseStats(pokeData.stats)}
      status={status ? `Caught in the wild ${status.date}` : 'Not caught'}
    />
  ) : (
    ''
  );
}

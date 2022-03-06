import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { getImageUrl } from '../common/getImageUrl';
import { getPokemonStatus } from '../common/getPokemonStatus';
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
  useEffect(() => loadPokemonData(), []);
  return pokeData ? (
    <PokemonPage
      id={pokeData.id}
      name={pokeData.name}
      weight={pokeData.weight}
      imagePath={getImageUrl(pokeData.id)}
      abilities={getStats(pokeData.abilities, 'ability')}
      types={getStats(pokeData.types, 'type')}
      status={status ? `Caught on ${status.date}` : 'Not owned'}
    />
  ) : (
    <div>Loading...</div>
  );
}

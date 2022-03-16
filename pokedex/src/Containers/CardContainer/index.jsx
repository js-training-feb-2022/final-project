import PokemonCard from "../../Components/PokemonCard";
import { useEffect, useState } from "react";

const CardContainer = ({ pokemon, pokemonAction }) => {
  const { catchPokemon, releasePokemon, myPokemonsTeam } = pokemonAction;
  const [pokemonFullData, setPokemonFullData] = useState({});
  const isCatched = !!myPokemonsTeam.find((pok) => pok.name === pokemon.name);
  const catchPokemonHandle = () => {
    catchPokemon(pokemon);
  };
  const releasePokemonHandle = () => {
    releasePokemon(pokemon);
  };
  useEffect(() => {
    fetch(pokemon.url)
      .then((response) => response.json())
      .then((pokemon) => setPokemonFullData(pokemon));
  }, [pokemon.url]);
  return (
    <PokemonCard
      pokemon={pokemonFullData}
      catchPokemon={catchPokemonHandle}
      releasePokemon={releasePokemonHandle}
      isCatched={isCatched}
    />
  );
};

export default CardContainer;

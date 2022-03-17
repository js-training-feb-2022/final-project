import { useState } from "react";

export const useLocalStorage = () => {
  const storedTeam = JSON.parse(localStorage.getItem("myPokemonsTeam"));
  const [myPokemonsTeam, setMyPokemonsTeam] = useState(storedTeam || []);

  const catchPokemon = (pokemon) => {
    pokemon.catchDate = new Date();
    const myPokemonsTeamNew = [...myPokemonsTeam, pokemon];
    setMyPokemonsTeam(myPokemonsTeamNew);
    localStorage.setItem("myPokemonsTeam", JSON.stringify(myPokemonsTeamNew));
  };
  const releasePokemon = (pokemon) => {
    const myPokemonsTeamNew = myPokemonsTeam.filter(
      (pok) => pok.name !== pokemon.name
    );
    setMyPokemonsTeam(myPokemonsTeamNew);
    localStorage.setItem("myPokemonsTeam", JSON.stringify(myPokemonsTeamNew));
  };
  return { catchPokemon, releasePokemon, myPokemonsTeam };
};

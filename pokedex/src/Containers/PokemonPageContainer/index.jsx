import PokemonPage from "../../Components/PokemonPage";
import {useParams} from "react-router-dom";
import {useEffect, useState} from "react";
import {useLocalStorage} from "../../utils/useLocalStorage";

const PokemonPageContainer = () =>{
    let {name} = useParams();
    const [pokemonFullInfo, setPokemonFullInfo]=useState({});
    useEffect(() => {
        fetch(`https://pokeapi.co/api/v2/pokemon/${name}`)
            .then((response) => response.json())
            .then((pokemon) => setPokemonFullInfo(pokemon));
    }, [name]);
    const pokemonAction = useLocalStorage();
    return(
        <PokemonPage pokemonFullInfo={pokemonFullInfo} pokemonAction={pokemonAction}/>
    );
}

export default PokemonPageContainer;
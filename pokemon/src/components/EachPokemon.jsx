import {useParams} from "react-router-dom";
import React, {useEffect, useState} from "react";
import axios from "axios";


const EachPokemon = () => {
    const [pokemon, setPokemon] = useState();
    const [error, setError] = useState();
    const [isFetch, setIsFetch] = useState(false);
    const {itemId} = useParams();

    useEffect(async () => {
        await axios.get(`https://pokeapi.co/api/v2/pokemon/${itemId}`)
            .then((result) => {
                setPokemon(result.data)
                setIsFetch(true)
            })
            .then(() => {
                console.log(pokemon.sprites.other['official-artwork'].front_default)
            })
            .catch(e => {
                setError(e)
                console.log(e)
                setIsFetch(true)
            })
    }, [])


        if (!isFetch) {
        return <div>Загрузка...</div>;
    } else {
        return (
            <div>
                <img alt={' '} src={pokemon.sprites.other['official-artwork'].front_default}/>
                {
                    pokemon.abilities.map((item, i) => (
                       <li key={i}>
                       {item.ability.name}
                    </li>
                    ))
                }
                <hr/>
                {pokemon.types.map((item, i) =>
                    ( <li key={i}>
                        {item.type.name}
                    </li>)
                )}
                {pokemon.weight}
            </div>
        )

    }
}
    export default EachPokemon;

import {useParams} from "react-router-dom";
import React, {useEffect} from "react";
import {useDispatch, useSelector} from "react-redux";
import {getEachPokemon} from "../actions/action";
import '../style/navBar.css';
import {releasePokemons, setCatchedPokemon} from "../store/requestReducer";

const EachPokemonPage = () => {
    const {itemId} = useParams();
    const dispatch = useDispatch();
    const pokemon = useSelector(state => state.pokemons.eachPokemon);
    const pokemons = useSelector(state => state.pokemons.items);
    const catchedPokemons = useSelector(state => state.pokemons.catchedPokemons);
    const isFetching = useSelector(state => state.pokemons.isFetchingEach);

    useEffect(() => {
        dispatch(getEachPokemon(itemId, catchedPokemons));
    }, []);

    useEffect(() => {
        dispatch(getEachPokemon(itemId, catchedPokemons));
    }, [catchedPokemons]);

    const catchPokemon = () => {
        const url = pokemon.sprites.other['official-artwork'].front_default;
        const d = new Date();
        let newPokemon = {
            name: pokemon.name,
            id: pokemon.id,
            url,
            isCatch: true,
            date: d.toLocaleString(),
        };

        pokemons.results.map(item => {
            if (pokemon.name === item.name) {
                return item.isCatch = true;
            }
        })
        for (let i = 0; i < catchedPokemons.length; i++) {
            if (catchedPokemons[i].name === pokemon.name) {
                return i;
            }
        }
        dispatch(setCatchedPokemon(newPokemon));
    };

    const releasePokemon = () => {
        pokemon.date = undefined;
        pokemons.results.map(item => {
            if (pokemon.name === item.name) {
                return item.isCatch = false;
            }
        })
        dispatch(releasePokemons(pokemon.name));
    };

    if (!isFetching) {
        return <div>Загрузка...</div>
    } else {
        return (
            <div className={'wrapper-for-margin'}>
                <div className={'each-page-wrapper'}>
                    <div className={'each-page__name'}><h3>{pokemon.name}</h3></div>

                    <div className={'each-page-content-wrapper'}>
                        <div className={'each-page-image-and-id'}>
                            <img className={'each-page-image'}
                                 alt={`pokemon`}
                                 src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/${itemId}.png`}/>
                            <div className={'each-page-id'}>
                                <p>Number of position:</p>
                                {itemId}
                            </div>
                        </div>
                        <div className={'each-page-description'}>

                            <div className={'each-page-props-descr'}>
                                <p>Weight:</p>
                                <ul>
                                    <li>{pokemon.weight}</li>
                                </ul>

                            </div>

                            <div className={'each-page-props-descr'}>
                                <p>Abilities:</p>
                                <ul>
                                    {pokemon.abilities.map((item, i) => (
                                        <li key={i}>{item.ability.name}</li>

                                    ))}
                                </ul>
                            </div>

                            <div className={'each-page-props-descr'}>
                                <p>Types:</p>
                                <ul>
                                    {
                                        pokemon.types.map((item, i) =>
                                            <li key={i}>
                                                {item.type.name}
                                            </li>)
                                    }
                                </ul>
                            </div>
                            {
                                pokemon.date === undefined
                                    ?
                                    <div className={'not-cathced-status'}>
                                        <p>Status: Not catched</p>

                                    </div>
                                    :
                                    <div>
                                        <div className={'cathced-status'}>
                                            <p>Status: Catched</p>
                                        </div>
                                        <div className={'date-of-catch'}>
                                            {pokemon.date.toString()}
                                        </div>
                                    </div>
                            }
                        </div>
                    </div>
                </div>
                    <div className={'each-page-wrapper-button-catch'}>
                        {
                            pokemon.date === undefined
                                ?
                                <button
                                className={'each-page-wrapper-button-catch'}
                                    onClick={() => catchPokemon()}>Catch
                                </button>
                                :
                                <button
                                className={'each-page-wrapper-button-catch'}
                                    onClick={() => releasePokemon()}>Release</button>
                        }
                    </div>
            </div>
        )
    }
}
export default EachPokemonPage;

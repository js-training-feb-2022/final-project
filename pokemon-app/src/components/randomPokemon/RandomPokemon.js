import { useState, useEffect } from "react";
import {Link} from 'react-router-dom'
import usePokemonService from "../../services/usePokemonService";
import ErrorMessage from "../errorMessage/ErrorMessage";
import Spinner from "../spinner/Spinner";



import './randomPokemon.scss'

const RandomPokemon = (props) => {

    const [pokemon, setPokemon] = useState({});

    const {loading, error, getPokemon, clearError} = usePokemonService();

    useEffect(() => {
        updatePokemon();
    }, [])

    const onPokemonLoaded = (pokemon) => {
        setPokemon(pokemon)
    }

    const updatePokemon = () => {
        clearError();
        const id = Math.floor(Math.random() * (898 - 1) + 1);
        getPokemon(id)
            .then(onPokemonLoaded)
    }

        const errorMessage = error ? <ErrorMessage/> : null;
        const spinner = loading ? <Spinner size={'small'}/> : null;
        const content = !(loading || error) ? <View pokemon={pokemon} listener={() => props.onPokemonSelected(pokemon.id)}/> : null;

        return (
            <div className="randomchar">
                {errorMessage}
                {spinner}
                {content}
                <div className="randomchar__static">
                    <p className="randomchar__title">
                        Welcome to the Pokemon Library!<br/>
                        Do you want to know more about any of the pokemons?<br/>
                        Just click on it!
                    </p>
                    <button onClick={updatePokemon} className="button">Random pokemon</button>
                </div>
            </div>
        )
    }


const View = ({pokemon, listener}) => {
    const {name, thumbnail} = pokemon;
    

    return (
        <Link to={'/info'}>
            <div className="randomchar__block" onClick={listener}>
            <img src={thumbnail} alt="Random character" className="randomchar__img"/>
            <div className="randomchar__info">
            <p className="randomchar__name">{name}</p>
            </div>
        </div>    
        </Link>
    )
}

export default RandomPokemon;
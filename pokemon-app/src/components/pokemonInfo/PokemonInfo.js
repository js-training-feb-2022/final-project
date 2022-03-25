import { useState, useEffect } from 'react';
import PropTypes from 'prop-types'

import usePokemonService from '../../services/usePokemonService';
import Spinner from '../spinner/Spinner';
import ErrorMessage from '../errorMessage/ErrorMessage';

import './pokemonInfo.scss';

const PokemonInfo = ({pokemonId}) => {
    const [pokemon, setPokemon] = useState(null);

    const {loading, error, getPokemon, clearError} = usePokemonService();

    useEffect(() => {
        updatePokemon();
    }, [pokemonId])

    const updatePokemon = () => {
        clearError();
        if(!pokemonId) {
            return;
        }
        getPokemon(pokemonId)   
            .then(onPokemonLoaded)
    }

    const onPokemonLoaded = (pokemon) => {
        setPokemon(pokemon);
    }


    const errorMessage = error ? <ErrorMessage/> : null;
    const spinner = loading ? <Spinner size={'large'}/> : null;
    const content = !(loading || error || !pokemon) ? <View pokemon={pokemon}/> : null;


        return (
            <div className="char__info">
                {errorMessage}
                {spinner}
                {content}
            </div>
        )
}

const View = ({pokemon}) => {
    const {name, id, weight, abilities, types, isCatched} = pokemon;
    return (
        <>
            <div className="char__basics">
                <img src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/${id}.png`} alt={name}/>
                <div>
                    <div className="char__info-name">{name}</div>
                </div>
            </div>
            <div className='pokemon__description'>
                <div className="char__descr">
                    id: {id}
                </div>
                <div className="char__descr">
                    weight: {weight}
                </div>
                <div className="char__descr">
                    catched: {isCatched ? `This pokemon was cathed` : 'This pokemon have not been cathed yet'}
                </div>
                <div className="char__comics">Abilities: </div>
                <ul className="char__comics-list">
                    {
                        abilities.map((item, i) => {
                            return(
                                <li key={i}className="char__comics-item">
                                {item}
                                </li>
                            ) 
                        })
                    }
                </ul>
                <div className="char__comics">Types: </div>
                <ul className="char__comics-list">
                    {
                        types.map((item, i) => {
                            return(
                                <li key={i}className="char__comics-item">
                                {item}
                                </li>
                            ) 
                        })
                    }
                </ul>
            </div>
        </>
    )
}

PokemonInfo.propTypes = {
    pokemonId: PropTypes.number
}

export default PokemonInfo;
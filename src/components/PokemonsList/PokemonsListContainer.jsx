import React, { useEffect, useState } from "react";
import { connect } from "react-redux";
import { getPokemonsListThunk } from "../../redux/pokemons-reducer";
import { getPokemonPageThunk } from "../../redux/pokemonPage-reducer";
import Preloader from "../common/Preloader/Preloader";
import { Pokemon } from "./Pokemon";
import { caughtPokemonsThunk } from "../../redux/caughtPokemons-reducer";
import PropTypes from "prop-types";
import s from './Pokemon.module.css';

const POKEMONS_COUNT = 12;

const PokemonListContainer = ({getPokemonsListThunk, caughtPokemonsThunk, pokemons, isFetching, getIdFromURL, caughtPokemons}) => {

    const [pokCount, setPokCount] = useState(POKEMONS_COUNT);

    useEffect(() => {
        getPokemonsListThunk(pokCount);
    }, [pokCount]);

    const caughtIds = caughtPokemons.map(element => getIdFromURL(element.url))

    let Pokemons = pokemons.map( (pok, index) => {
        let id = getIdFromURL(pok.url);
        return (
            <Pokemon
                key={ index }
                id = { id }
                name = {pok.name} 
                thunk = {caughtPokemonsThunk}
                caughtIds ={caughtIds}
            />
        )
    });

    const loadMorePokemons = () => {
        setPokCount((prev) => prev + POKEMONS_COUNT);
    }

    return (
        <div className={s.cards_container}>
            <div className={s.cards_wrapper}>
                { Pokemons }
            </div>
            <div className={s.preloader}>
                { isFetching ? <Preloader /> : null }
            </div>
            <div className={`${s.btn} ${s.loadmore}`} onClick={ loadMorePokemons }>Load more</div>
        </div>
    );
}

const mapStateToProps = (state) => {
    return {
        pokemons: state.pokemons.pokemons,
        isFetching: state.pokemons.isFetching,
        caughtPokemons: state.caughtPokemons.caughtPokemons
    }
}

export default connect(mapStateToProps,{ getPokemonsListThunk, getPokemonPageThunk, caughtPokemonsThunk })(PokemonListContainer);

PokemonListContainer.propTypes = {
    getPokemonsListThunk: PropTypes.func.isRequired,
    caughtPokemonsThunk: PropTypes.func.isRequired,
    pokemons: PropTypes.array.isRequired,
    isFetching: PropTypes.bool,
    caughtPokemons: PropTypes.array.isRequired,
    getIdFromURL: PropTypes.func
}
import React, { useEffect } from "react";
import { connect, useDispatch } from "react-redux";
import { useParams } from "react-router-dom";
import { getPokemonPageThunk } from "../../redux/pokemonPage-reducer";
import { PokemonPage } from "../PokemonPage/PokemonPage";
import Preloader from "../common/Preloader/Preloader";
import PropTypes from "prop-types";
import s from './PokemonPage.module.css';

const PokemonPageContainer = ({pokemon, isFetching, caughtPokemons, getIdFromURL}) => {
    const params = useParams();
    const pokemonId = params.pokemonId;
    const dispatch = useDispatch();

    useEffect(() => {
        if (pokemonId) {
           dispatch(getPokemonPageThunk(pokemonId));
        }
    }, [pokemonId]);

    const caughtIds = caughtPokemons.map(element => getIdFromURL(element.url));
    const caughtTimes = caughtPokemons.map(element => element.caughtTime);

    return (
        <div className={s.cards_container}>
            <div className={s.cards_wrapper}>
                { isFetching ? <Preloader /> :
                    <PokemonPage
                        id = {pokemon.id}
                        name = {pokemon.name}
                        img = {pokemon.sprites.other['official-artwork'].front_default}
                        weight = {pokemon.weight}
                        abilities = {pokemon.abilities}
                        types = {pokemon.types}
                        isCatched = {caughtIds.includes(pokemon.id)}
                        caughtTime = { (caughtIds.indexOf(pokemon.id) != -1) ? (caughtTimes[caughtIds.indexOf(pokemon.id)]) : '-' }
                    />
                }
            </div>
        </div>
    );
}

const mapStateToProps = (state) => {
    return {
        pokemon: state.pokemon.pokemon,
        isFetching: state.pokemon.isFetchin,
        caughtPokemons: state.caughtPokemons.caughtPokemons
    }
}

export default connect(mapStateToProps)(PokemonPageContainer);

PokemonPageContainer.propTypes = {
    pokemon: PropTypes.object.isRequired,
    isFetching: PropTypes.bool.isRequired,
    caughtPokemons: PropTypes.array.isRequired,
    getIdFromURL: PropTypes.func.isRequired
}
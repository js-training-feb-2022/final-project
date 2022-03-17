import React from "react";
import { connect } from "react-redux";
import Preloader from "../common/Preloader/Preloader";
import { caughtPokemonsThunk } from "../../redux/caughtPokemons-reducer";
import {CaughtPokemon} from "../CaughtPokemons/CaughtPokemon";
import PropTypes from "prop-types";
import s from './CaughtPokemons.module.css';

const CaughtPokemonsContainer = ({ caughtPokemons, isLoading, getIdFromURL }) => {

    let CaughtPokemons = caughtPokemons.map( (pok, index) => {
        return (
                <CaughtPokemon 
                    key = {index}
                    id = {getIdFromURL(pok.url)}
                    name = {pok.name}
                    time= {pok.caughtTime}
                />
        )
    });

    return (
        <div className={s.cards_container}>
            <div className={s.cards_wrapper}>
                { isLoading ? <Preloader /> : CaughtPokemons }
                <div className = {s.message}>
                    {!caughtPokemons.length && 'There are no caught pokemons...'}
                </div>
            </div>
        </div>
    )
}

const mapStateToProps = (state) => {
    return {
        caughtPokemons: state.caughtPokemons.caughtPokemons,
        isLoading: state.caughtPokemons.isLoading
    }
}

export default connect(mapStateToProps,{ caughtPokemonsThunk })(CaughtPokemonsContainer);

CaughtPokemonsContainer.propTypes = {
    caughtPokemons: PropTypes.array.isRequired,
    isLoading: PropTypes.bool.isRequired,
    getIdFromURL: PropTypes.func.isRequired
}
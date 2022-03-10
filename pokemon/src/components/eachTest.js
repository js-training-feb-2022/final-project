import {useParams} from "react-router-dom";
import React, {useEffect, useState} from "react";
import {useDispatch, useSelector} from "react-redux";
import {getEachPokemon} from "../actions/action";
import '../style/navBar.css'

//Исправить дату - если ее нет то выводится пустота
const EachTest = () => {
    const {itemId} = useParams();
    const dispatch = useDispatch();
    const pokemon = useSelector(state => state.pokemons.eachPokemon)
    const catchedPokemons = useSelector(state => state.pokemons.catchedPokemons)
    const isFetching = useSelector(state => state.pokemons.isFetchingEach)

    useEffect(() => {
        dispatch(getEachPokemon(itemId, catchedPokemons))
    }, [])

    function ShowMeMore() {
        // catchedPokemons.map(item => {
        // })
        // console.log(pokemon.date)
    }

    if (!isFetching) {
        return <div>Загрузка...</div>;
    } else {
        return (
            <div className={'wrapper-for-margin'}>
                <div className={'each-page-wrapper'}>
                    <div className={'each-page__name'}>
                        <h3>{pokemon.name}</h3>
                    </div>
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

                            <div className={'each-page-weight'}>
                                <ul>Weight:</ul>
                                <li>{pokemon.weight}</li>
                            </div>
                            <div className={'each-page-abilities'}>
                                <ul>Abilities:</ul>
                                {pokemon.abilities.map((item, i) => (
                                    <li key={i}>{item.ability.name}</li>
                                ))}
                            </div>
                            <div className={'each-page-types'}>
                                <ul>Types:</ul>
                                {pokemon.types.map((item, i) =>
                                    <li key={i}>
                                        {item.type.name}
                                    </li>
                                )}
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
                                        <div>
                                            {pokemon.date.getFullYear()}/{pokemon.date.getMonth()}/{pokemon.date.getDate()}
                                            <br/>
                                            <div>
                                            {pokemon.date.getHours()}:{pokemon.date.getMinutes()}
                                            </div>
                                        </div>
                                    </div>
                            }
                        </div>
                        {/*<button onClick={ShowMeMore}>ShowMeMore</button>*/}
                    </div>
                </div>
            </div>
        )
    }
}
export default EachTest;

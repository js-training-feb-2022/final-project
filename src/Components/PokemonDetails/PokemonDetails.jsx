import React, { useState, useEffect } from "react";
import axios from "axios";
import { useParams } from 'react-router-dom';
import LoadingSpinner from "../LoadingSpinner";
import './PokemonDetails.css'

export default function PokemonDetails({ caught }) {
    const { id } = useParams();

    const [pokemon, setPokemon] = useState(null);
    const [loading, setLoading] = useState(true);
    const hasPokemon = (i) => caught.some(p => p.name === pokemon.name);
    const getCaughtDate = (i) => caught.find(p => p.name === pokemon.name).date;

    useEffect(() => {
        axios
            .get(`https://pokeapi.co/api/v2/pokemon/${id}`)
            // Extract the DATA from the received response
            .then((res) => {
                setPokemon(res.data);
                setLoading(false);
            });
    }, [id]);
    
    return (
        <article className="pokemon-details">
            {!loading ? pokemon && (
                <div>
                    <h2>Pokemon Characteristics</h2>
                    <p>id: {pokemon.id}</p>
                    <p>name: {pokemon.name}</p>
                    <img src={pokemon.sprites.other['official-artwork'].front_default} alt="pokemon"></img>
                    <p>abilities: {pokemon.abilities.map((a, i) => a.ability.name + (i !== pokemon.abilities.length - 1 ? ', ' : ''))}</p>
                    <p>types: {pokemon.types.map((t, i) => t.type.name + (i !== pokemon.types.length - 1 ? ', ' : ''))}</p>
                    <p>weight: {pokemon.weight}</p>
                    <p>{ hasPokemon(id) ? `Caught on ${getCaughtDate(id)}` : "Not caught yet" }</p>
                </div>
            ) : (
                <LoadingSpinner />
            )}
        </article>
    )
}

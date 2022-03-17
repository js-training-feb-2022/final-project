import React from 'react';
import { Link } from 'react-router-dom';
import './pokemonCard.scss';

function PokemonCard(props) {
  return (
    <div className='card'>
      <Link to={props.url}>
        <div className='pokemonCard'>
            <b>{props.name}</b>
            <p>ID: {props.pokemonId}</p>
        </div>
      </Link>
      <button className={`button ${props.buttonData.class}`} onClick={props.buttonData.action}>{props.buttonData.name}</button>
    </div>
  );
}

export default PokemonCard;

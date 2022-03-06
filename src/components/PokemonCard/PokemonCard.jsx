import React from 'react';
import { NavLink } from 'react-router-dom';
import './cardStyle.scss';

export function PokemonCard({ name, id, imagePath, onClick, link, state }) {
  return (
    <div className='card'>
      <NavLink to={link}>
        <div className='card__container'>
          <img className='image' src={imagePath} alt={name} />
          <h4>{id}</h4>
          <h4>{name}</h4>
        </div>
      </NavLink>
      <button onClick={onClick}>{state}</button>
    </div>
  );
}

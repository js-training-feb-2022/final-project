import React from 'react';
import './pokemonPageStyle.scss';

export function PokemonPage({
  name,
  id,
  imagePath,
  status,
  abilities,
  types,
  weight,
}) {
  return (
    <div className='page page_pokemon'>
      <h2>
        {name} {id}
      </h2>
      <div className='pokemon-wrapper'>
        <img className='image' src={imagePath} alt={name} />
        <aside className='aside'>
          <ul className='aside__extra'>
            <li>Abilities: {abilities}</li>
            <li>Types: {types}</li>
            <li>Weight: {weight}</li>
            <li>{status}</li>
          </ul>
        </aside>
      </div>
    </div>
  );
}

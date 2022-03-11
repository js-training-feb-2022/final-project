import React from 'react';
import { CustomBarChart } from '../../UI/CustomBarChart/CustomBarChart';
import { POKEMON_TYPE_COLOR } from '../../auxilary/PokemonTypes';
import './pokemonPageStyle.scss';

export function PokemonPage({
  name,
  id,
  imagePath,
  status,
  abilities,
  types,
  weight,
  height,
  stats,
}) {
  return (
    <div className='page page_pokemon'>
      <h2>{name}</h2>
      <div className='page_pokemon__wrapper'>
        <div className='pokemon-wrapper'>
          <img className='image' src={imagePath} alt={name} />
          <ul className='properties-list'>
            <li className='properties-list__item property'>
              <span className='property__title'>ID: </span>
              <span className='property__value'>{id}</span>
            </li>
            <li className='properties-list__item property'>
              <span className='property__title'>Abilities: </span>
              <span className='property__value'>{abilities.join(', ')}</span>
            </li>

            <li className='properties-list__item property'>
              <span className='property__title'>Weight: </span>
              <span className='property__value'>{weight}kg</span>
            </li>
            <li className='properties-list__item property'>
              <span className='property__title'>Height: </span>
              <span className='property__value'>{height}m</span>
            </li>
            <li className='properties-list__item property'>
              <span className='property__title'>Types: </span>
              {types.map((type) => (
                <span
                  key={type}
                  style={{ backgroundColor: POKEMON_TYPE_COLOR[type] }}
                  className={'property__value type'}>
                  {type}
                </span>
              ))}
            </li>
            <li className='properties-list__item property'>
              <span className='property__title'>{status}</span>
            </li>
          </ul>
        </div>
        <div className='pokemon-stats'>
          <CustomBarChart list={stats} />
        </div>
      </div>
    </div>
  );
}

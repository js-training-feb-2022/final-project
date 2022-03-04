import React from 'react';
import { PokemonCard } from '../PokemonCard/PokemonCard';
import { getImageUrl } from '../../common/getImageUrl';
import './mainStyle.scss';

export function Main({ list, onClick }) {
  return (
    <main className='page'>
      <h2>Main Page</h2>
      <div className='list'>
        <div className='list__container'>
          {list.map((item, id) => (
            <PokemonCard name={item.name} id={id + 1} imagePath={getImageUrl(id + 1)} onClick={onClick} />
          ))}
        </div>
      </div>
    </main>
  );
}

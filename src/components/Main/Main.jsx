import React from 'react';
import { PokemonCard } from '../PokemonCard/PokemonCard';
import { getImageUrl } from '../../common/getImageUrl';
export function Main({ list, onClick }) {
  return (
    <main className='page'>
      <h2>Main Page</h2>
      <div className='list'>
        <div className='list__container'>
          {list.map((item, id) => (
            <PokemonCard name={item.name} id={id} imagePath={getImageUrl(id)} onClick={onClick} />
          ))}
        </div>
      </div>
    </main>
  );
}

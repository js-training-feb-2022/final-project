import React from 'react';
import { getImageUrl } from '../../common/getImageUrl';
import './mainStyle.scss';
import { PokemonCardContainer } from '../../containers/PokemonCardContainer';

export function Main({ list }) {
  return (
    <main className='page'>
      <h2>Main Page</h2>
      <div className='list'>
        <div className='list__container'>
          {list.map((item) => (
            <PokemonCardContainer
              key={item.name}
              name={item.name}
              id={item.id}
              imagePath={getImageUrl(item.id)}
            />
          ))}
        </div>
      </div>
    </main>
  );
}

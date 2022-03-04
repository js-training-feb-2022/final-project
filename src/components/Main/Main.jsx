import React from 'react';
import { getImageUrl } from '../../common/getImageUrl';
import './mainStyle.scss';
import { PokemonCardContainer } from '../../containers/PokemonCardContainer';

export function Main({ list, onClick }) {
  return (
    <main className='page'>
      <h2>Main Page</h2>
      <div className='list'>
        <div className='list__container'>
          {list.map((item, id) => (
            <PokemonCardContainer
              key={item.name}
              name={item.name}
              id={id + 1}
              imagePath={getImageUrl(id + 1)}
              onClick={onClick}
            />
          ))}
        </div>
      </div>
    </main>
  );
}

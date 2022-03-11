import React from 'react';
import { getImageUrl } from '../../auxilary/getImageUrl';
import { PokemonCardContainer } from '../../containers/PokemonCardContainer';
import './mainStyle.scss';

export function Main({ list }) {
  return (
    <div className='list'>
      {list.map((item) => (
        <PokemonCardContainer
          key={item.name}
          name={item.name}
          id={item.id}
          imagePath={getImageUrl(item.id)}
        />
      ))}
    </div>
  );
}

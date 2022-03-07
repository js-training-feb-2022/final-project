import React from 'react';
import { getImageUrl } from '../../auxilary/getImageUrl';
import './mainStyle.scss';
import { PokemonCardContainer } from '../../containers/PokemonCardContainer';
import { CustomButton } from '../../UI/CustomButton/CustomButton';

export function Main({ list, onClick }) {
  return (
    <main className='page'>
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
      {onClick ? (
        <CustomButton type={'Catch'} title={'Load More'} onClick={onClick} />
      ) : (
        ''
      )}
    </main>
  );
}

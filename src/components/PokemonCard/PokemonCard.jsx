import React from 'react';
export function PokemonCard({ name, id, imagePath, onClick }) {
  return (
    <div onClick={onClick} className='card'>
      <div className='card__container'>
        <img src={imagePath} alt={name} />
        <h4>{id}</h4>
        <h4>{name}</h4>
      </div>
    </div>
  );
}

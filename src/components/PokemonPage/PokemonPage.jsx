import React from 'react';

export function PokemonPage({
  name,
  id,
  imagePath,
  status,
  abilities,
  types,
  weight,
}) {
  console.log(id, name, weight);
  return (
    <div className='page'>
      <img className='image' src={imagePath} alt={name} />
      <aside>
        <h4>{id}</h4>
        <h4>{name}</h4>
        {abilities}
        {types}
        {weight}
        {status}
      </aside>
    </div>
  );
}

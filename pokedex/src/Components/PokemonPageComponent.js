import React from 'react';
import '../Styles/Pokemon-page.css'

export default function PokemonPageComponent({pokemon, index, captured}) {
  return (
    <main className='main'>
      <div className='pokemon-page-wrapper'>
        <div className='pokemon-page-text-wrapper'>
          <h3>ID:</h3>
          <p>{index}</p>
        </div>
        <div className='pokemon-page-text-wrapper'>
          <h3>Name:</h3>
          <p>{pokemon.name}</p>
        </div>     
       
        <img className='pokemon-image' src={pokemon.imgUrl} alt={pokemon.name}></img>
        <h3>Abilities:</h3>
        {pokemon.abilities.map((item, itemindex)=>(<li className='list-item' key={itemindex}>{item.ability.name}</li>))}
        <h3>Types:</h3>
        {pokemon.types.map((item,index)=>(<li className='list-item' key={index}>{item.type.name}</li>))}
        <h3>Weight:</h3>
        <p>{pokemon.weight}</p>
        {captured}
      </div>

    </main>
  
  )
};

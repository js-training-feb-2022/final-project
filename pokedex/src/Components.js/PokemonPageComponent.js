import React, { useContext } from 'react'
import { PokemonContext } from '../Context/PokemonContext'

export default function PokemonPageComponent({pokemon, index, captured}) {
  const{capturedPokemonList} = useContext(PokemonContext)
  return (
    <div>
      <p>id:{index}</p>
      <h3>Name:</h3>
      <p>{pokemon.name}</p>
      <img src={pokemon.imgUrl}></img>
      <h3>Abilities:</h3>
      {pokemon.abilities.map((item, itemindex)=>(<li key={itemindex}>{item.ability.name}</li>))}
      <h3>Types:</h3>
      {pokemon.types.map((item,index)=>(<li key={index}>{item.type.name}</li>))}
      <h3>Weight:</h3>
      <p>{pokemon.weight}</p>
      {captured}
    </div>
  
  )
}

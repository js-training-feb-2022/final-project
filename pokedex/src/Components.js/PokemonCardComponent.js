import React, { useContext, useReducer } from 'react'
import { Link } from 'react-router-dom'
import { PokemonContext } from '../Context/PokemonContext'

export default function PokemonCardComponent({pokemon, index}) {


  return (
     <>
     <Link  to={`/${index}`}>
      <h3> Id: {index}</h3>
      <p> Name: {pokemon.name}</p>      
     </Link>
    </>
  

  )
}


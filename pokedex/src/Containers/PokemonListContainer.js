import React, { useContext, useState } from 'react'
import PokemonCardComponent from '../Components.js/PokemonCardComponent'
import { PokemonContext } from '../Context/PokemonContext'
import CatchButtonContainer from './CatchButtonContainer'
import { Link } from 'react-router-dom'
import InfiniteScroll from 'react-infinite-scroll-component'


export default function PokemonListContainer() {
const {pokemonList, hasMore, fetchData} = useContext(PokemonContext)

return(
  <>
  
<InfiniteScroll
  dataLength={pokemonList.length}
  next={fetchData}
  hasMore = {true}
  
>
    {  pokemonList.map((pokemon, index)=>(
  
      <div key={index}>
        <PokemonCardComponent pokemon={pokemon} index={index}/>  
      
        <CatchButtonContainer pokemon={pokemon} index={index}/> 
    </div>
 
   
  ))  }
</InfiniteScroll>
  { /* pokemonList.map((pokemon, index)=>(
  
      <div key={index}>
        <PokemonCardComponent pokemon={pokemon} index={index}/>  
      
        <CatchButtonContainer pokemon={pokemon} index={index}/> 
    </div>
 
   
  ))  */}
  </>

)
}

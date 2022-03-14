import React, { useContext } from 'react';
import PokemonCardComponent from '../Components/PokemonCardComponent';
import { PokemonContext } from '../Context/PokemonContext';
import CatchButtonContainer from './CatchButtonContainer';
import '../Styles/PokemonList.scss'


export default function PokemonListContainer() {
  const {pokemonList} = useContext(PokemonContext);
  return(
  <main className='main'>
    {pokemonList.map((pokemon, index)=>(  
      <div key={index} className="card">
        <div className='card-wrapper'>
          <PokemonCardComponent pokemon={pokemon} index={index}/>       
          <CatchButtonContainer pokemon={pokemon} index={index}/> 
        </div>
        
      </div>))}
  </main>
)
};

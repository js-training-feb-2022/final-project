import React, { createContext, useState, useEffect } from 'react';
import axios from 'axios';

export  const PokemonContext = createContext('');

export const PokemonProvider=(props)=>{
  const [pokemonList, setPokemon] = useState([]);
  const baseUrl = 'https://pokeapi.co/api/v2/pokemon';
  const [currentPage, setCurrentPage] = useState(baseUrl);
  const [fetching, setFetching] = useState(true);
  const [limit, setLimit] = useState(100) ;
  
    useEffect(()=>{
      if(fetching && pokemonList.length < limit){
        axios.get(currentPage)
        .then((response)=>{
          setPokemon([...pokemonList, ...response.data.results])
          setCurrentPage(prev=>response.data.next)
          setLimit(response.data.count)
        })
        .finally(()=>{
          setFetching(false)
        })
      }    
    }, [fetching]);
    const [capturedPokemonList, setCapturedPokemon] = useState([]);
    
    const scrollHandler = (e)=>{
     
        if(e.target.documentElement.scrollHeight - 
          (e.target.documentElement.scrollTop + e.target.documentElement.scrollTop) <100){
          setFetching(true)        
      }                
    };

    useEffect(()=>{
      document.addEventListener('scroll', scrollHandler);
      return function(){
        document.removeEventListener('scroll', scrollHandler)
      }
    },[]);
    
    let contextValue = {pokemonList, setPokemon, capturedPokemonList, setCapturedPokemon};
 
  return (
    <PokemonContext.Provider value={contextValue}> 
      {props.children}
    </PokemonContext.Provider>
    )
};


import axios from 'axios';
import React, { useContext, useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import PokemonPageComponent from '../Components/PokemonPageComponent';
import { PokemonContext } from '../Context/PokemonContext';

export default function PokemonPageContainer() {
  const {index} = useParams();
  const indexForUrl = Number(index)+1;
  const {capturedPokemonList } = useContext(PokemonContext);
  const pokemonUrl = "https://pokeapi.co/api/v2/pokemon/"+indexForUrl;
  const [content, setContent] = useState({
    name:'',
    imgUrl: '',
    abilities:[],
    types:[],
    weight: '',
  });
  useEffect(()=>{
    axios.get(pokemonUrl)
    .then((response)=>{
      setContent({...content, 
        name: response.data.name, 
        imgUrl:response.data.sprites.other['official-artwork'].front_default, 
        abilities: response.data.abilities,
        types: response.data.types,
        weight: response.data.weight,
      })      
    });  
  },[]);


  const captured = capturedPokemonList.find(item=>item.name===content.name);

  return (
    <>
      <PokemonPageComponent pokemon={content} index={index} captured={captured 
        ? 
        <>
          <h3>Status: </h3>
          <p>captured</p>
          <h3>Capture date:</h3>  
          <p>{captured.date.toString()}</p>
        </>
        : 
        <>
          <h3> Status: </h3>
          <p>not captured</p>
        </>
        
      }/>
    </>
   )
};

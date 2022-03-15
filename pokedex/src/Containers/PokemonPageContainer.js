import axios from 'axios';
import React, { useContext, useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import PokemonPageComponent from '../Components/PokemonPageComponent';
import { PokemonContext } from '../Context/PokemonContext';
import NotFound from '../Components/NotFound';


export default function PokemonPageContainer() {
  const {index} = useParams(); 
  const indexForUrl = Number(index)+1;
  const {capturedPokemonList, pokemonList } = useContext(PokemonContext);
  const pokemonUrl = "https://pokeapi.co/api/v2/pokemon/"+indexForUrl;
  let [res, setRes] = useState('')
  const [content, setContent] = useState({
    name:'',
    imgUrl: '',
    abilities:[],
    types:[],
    weight: '',
  });

  useEffect(()=>{
    axios.get(pokemonUrl)
    .catch((error)=>{
      console.log(error.response.status)
    })
    .then((response)=>{
      setRes(response.data)
    })
  },[])

  useEffect(()=>{
    if(res){
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
    }
  },[res])
  const captured = capturedPokemonList.find(item=>item.name===content.name);


/*   useEffect(()=>{
      axios.get(pokemonUrl)
      .catch((error)=>{
        console.log(error.response.status)
      })
      .then((response)=>{
        setContent({...content, 
          name: response.data.name, 
          imgUrl:response.data.sprites.other['official-artwork'].front_default, 
          abilities: response.data.abilities,
          types: response.data.types,
          weight: response.data.weight,
        })    
      });    
  },[]); */
/*  
 */
  return ( 
 <div>
 {res ? ( <PokemonPageComponent pokemon={content} index={index} captured={captured}/>) : (<NotFound />)}
   
 </div>
  )
  };

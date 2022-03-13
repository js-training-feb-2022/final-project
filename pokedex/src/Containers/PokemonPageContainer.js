import axios, { Axios } from 'axios'
import React, { useContext, useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import PokemonPageComponent from '../Components.js/PokemonPageComponent'
import { PokemonContext } from '../Context/PokemonContext'

export default function PokemonPageContainer() {
  const {index} = useParams()
  const indexForUrl = Number(index)+1
  const {pokemonList, capturedPokemonList } = useContext(PokemonContext)
 const pokemonUrl = "https://pokeapi.co/api/v2/pokemon/"+indexForUrl
  

const [content, setContent] = useState({
  name:'',
  imgUrl: '',
  abilities:[],
  types:[],
  weight: '',
})


const[imgUrl, setImgUrl] = useState('')
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
  },[])


  const captured = capturedPokemonList.find(item=>item.name===content.name)

  return (
    <>
      <PokemonPageComponent pokemon={content} index={index} captured={captured 
        ? 
        <>
        <p>Status: captured</p>
        <p>Capture date:{captured.date.toString()}</p>  
        </>
        : 
        <p>Status: not captured</p>
      }/>
    </>
   )
}

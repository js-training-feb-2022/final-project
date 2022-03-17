//import PropTypes from 'prop-types'
import React, { useState } from "react";
import axios from "axios";
import MainPage from "../main page/MainPage";

const homeUrl = "https://pokeapi.co/api/v2/pokemon";

export default function ManageData() {
  const [listOfPokes, setListOfPokes] = React.useState(null);
  React.useEffect(()=>{
    axios.get(homeUrl).then((response)=>{
      let data = response.data.results.map((item, index)=> ({id:index+1, name:item.name, url:item.url, key:index, caught:false, caughtDate:null}))
      data.forEach(item=>
        {
        axios.get(item.url).then(
          (response)=>{
            item.abilities = response.data.abilities.map(item=>item.ability.name); 
            item.types = response.data.types.map(item=>item.type.name);
            item.imgUrl = response.data.sprites.other["official-artwork"]["front_default"];
            item.weight = response.data.weight;
            },
          (error)=> alert('fuck!')
        )
        }
      )
      setListOfPokes(data);
    })
  },[])
  console.log(listOfPokes);
  return <p>asdfa</p>
}
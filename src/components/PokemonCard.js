import React, { useState, useEffect } from "react";
import { Link } from 'react-router-dom'; 
import axios from "axios";
import moment from 'moment';

const PokemonCard = ({name, id, url, link, release}) => {
  const [picture, setPicture] = useState();
  const isCaught = Object.keys(localStorage).includes(id.toString());
  const [catchButtonState, setCatchButtonState] = useState(isCaught);

  const changeButton = () => {
    setCatchButtonState(!catchButtonState);
    const date = moment().format("YYYY/MM/DD, HH:mm:ss");
    !catchButtonState ? localStorage.setItem(id, JSON.stringify(date)) : localStorage.removeItem(id);
    release && release(id)
  }

  useEffect(() => {
    axios.get(url).then((response) => {
      setPicture(response.data.sprites.other['official-artwork'].front_default)
    });
  }, [])

  const pokemonClass = catchButtonState ? "release-button" : "catch-button"
  const buttonName = catchButtonState ? "Release me!" : "Catch me!"

  return (
    <div className="pokemon-card">        
      <Link to={link} className="img-wrapper">
        <img src={picture} alt={name} className="pokemon-img"/>
      </Link>
      <div className="info-wrapper">
        <Link to={link} className="pokemon-data">
          <h3>
            <span className="definition">ID: </span>{id}
          </h3>
          <h3>
            <span className="definition">Name: </span>{name}
          </h3>          
        </Link>
        <div className="button-wrapper">
          <button onClick={changeButton} className={pokemonClass}>{buttonName}
          </button> 
        </div>
      </div>         
    </div>
  )
}

export default PokemonCard;

import './CardStyle.css';
import React from 'react';
import { DataContext } from '../data';
import {BrowserRouter as Router, Route, Link, Routes, BrowserRouter} from 'react-router-dom';


export default function Card(props) {
  const {id, name, url, caught} = props;
  const {listOfPokes, setListOfPokes} = React.useContext(DataContext);

  const catchPoke = () => {
    let updatedListOfPokes = listOfPokes.filter(item=>true);
    let indexOfDataInListOfPokes = id;
    updatedListOfPokes[indexOfDataInListOfPokes].caught=true;
    updatedListOfPokes[indexOfDataInListOfPokes].caughtDate=new Date();
    setListOfPokes(updatedListOfPokes);
  }
  return (
    <>
      <div className="Card">
        <Link to="/pers" state={id}>
          <img className='Card__img' src={url} alt='Oops! I lost the picture again :('></img>
        </Link>
        <h2 className='Card__poke-id'>id={id}</h2>
        <h2 className='Card__poke-name'>{name}</h2>
        <button onClick={catchPoke} disabled={caught} className='Card__button reset-button-style'>Catch</button>
      </div>
    </>
  );
}
import './CardStyle.css';
import React from 'react';
import { DataContext } from '../data';
import {BrowserRouter as Router, Route, Link, Routes, BrowserRouter} from 'react-router-dom';


export default function Card(props) {
  const {id, name, caught} = props;
  const {listOfPokes, setListOfPokes, currentPage, cardsPerPage, addCaughtPoke, removeCaughtPoke, getPokesProperties, allPokes, setAllPokes} = React.useContext(DataContext);
  const [textButton, setTextButton] = React.useState('Поймать');
  
  let array = allPokes.filter(item=>item.id===id);
  React.useEffect(function(){
    if (array.length===0){
      return (<h1>загрузка...</h1>)
    }
    if (array[0].caught===true){
      setTextButton('Отпустить');
    }
  },[])
  
  const catchPoke = () => {
    debugger
    let updatedListOfPokes = listOfPokes.filter(item=>true);
    let indexOfDataInListOfPokes = id-(currentPage-1)*cardsPerPage;
    if (indexOfDataInListOfPokes<0||indexOfDataInListOfPokes>9){
      let updatedAllPokes = allPokes.filter(item=>true);
      let indexOfDataInAllPokes = allPokes.findIndex(item=>item.id===id);
      updatedAllPokes[indexOfDataInAllPokes].caught=false;
      updatedAllPokes[indexOfDataInAllPokes].caughtDate=null;
      setAllPokes(updatedAllPokes);
      removeCaughtPoke(id);
    }
    else {
      if (updatedListOfPokes[indexOfDataInListOfPokes].caught){
        updatedListOfPokes[indexOfDataInListOfPokes].caught=false;
        updatedListOfPokes[indexOfDataInListOfPokes].caughtDate=null;
        removeCaughtPoke(id);
        setListOfPokes(updatedListOfPokes);
        setTextButton('Поймать');
        let updatedAllPokes = allPokes.filter(item=>true);
        let indexOfDataInAllPokes = allPokes.findIndex(item=>item.id===id);
        updatedAllPokes[indexOfDataInAllPokes].caught=false;
        updatedAllPokes[indexOfDataInAllPokes].caughtDate=null;
        setAllPokes(updatedAllPokes);
      }
      else {
        updatedListOfPokes[indexOfDataInListOfPokes].caught=true;
        updatedListOfPokes[indexOfDataInListOfPokes].caughtDate=new Date();
        addCaughtPoke(listOfPokes[indexOfDataInListOfPokes]);
        setListOfPokes(updatedListOfPokes);
        setTextButton('Отпустить');
      }
    }
  }

  return (
    <>
      <div className="Card" onClick={(e)=> getPokesProperties(id)}>
        <Link to="/pers" state={id}>
          <h2 className='Card__poke-id'>id={id}</h2>
          <h2 className='Card__poke-name'>{name}</h2>
          <button onClick={(e)=>{e.preventDefault();catchPoke()}} className='Card__button reset-button-style'>{textButton}</button>
        </Link>
      </div>
    </>
  );
}
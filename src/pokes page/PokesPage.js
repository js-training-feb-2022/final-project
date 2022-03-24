import './PokesPage.css';
import React from 'react';
import { DataContext } from '../data';
import {Navigate} from 'react-router-dom'

export default function PokesPage() {
  const {listOfPokes, pokesData} = React.useContext(DataContext);
  if (listOfPokes.length===0){
    return <Navigate to='/'/>
  }
  if (!pokesData){
    return <p>загрузка...</p>
    
  }
  let listOfAbilities = '';
  pokesData.abilities.forEach(element => {
    listOfAbilities = listOfAbilities + element + "\n";
  });

  let typeOfPoke = '';
  pokesData.types.forEach(element => {
    typeOfPoke = typeOfPoke + element + "\n";
  });

  return ( 
    <div className="Pokes-page">
      <div className="Pokes-page__img-wrapper">
        <img className='Pokes-page__img' src={pokesData.imgUrl} alt=''></img>
      </div>
      <div className="Pokes-page__data">
        <h1 className="Pokes-page__name">{pokesData.name}</h1>
        <dl className="Pokes-page__property text">
            <dt>id:  </dt>
            <dd>{pokesData.id}</dd>
        </dl>
        <dl className="Pokes-page__property text">
            <dt>способности:  </dt>
            <dd>{listOfAbilities}</dd>
        </dl>
        <dl className="Pokes-page__property text">
            <dt>тип:  </dt>
            <dd>{typeOfPoke}</dd>
        </dl>
        <dl className="Pokes-page__property text">
            <dt>вес:  </dt>
            <dd>{pokesData.weight}</dd>
        </dl>
        <dl className="Pokes-page__property text">
            <dt>пойман:</dt>
            <dd>{pokesData.caught?`${pokesData.caughtDate.getDate()}.${pokesData.caughtDate.getMonth()+1}.${pokesData.caughtDate.getFullYear()}г в ${pokesData.caughtDate.getHours()}:${pokesData.caughtDate.getMinutes()}`:'не пойман' }</dd>
        </dl>
      </div>
    </div>
  );
}
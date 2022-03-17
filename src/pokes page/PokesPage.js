import './PokesPage.css';
import React from 'react';
import { useNavigate, Redirect, useLocation } from 'react-router-dom';
import { DataContext } from '../data';
import App from '../App';

export default function PokesPage() {
  const props = useLocation();
  const key = props.state;
  const {listOfPokes} = React.useContext(DataContext);

  const data = listOfPokes[key];
  let listOfAbilities = '';
  data.abilities.forEach(element => {
    listOfAbilities = listOfAbilities + element + "\n";
  });

  let typeOfPoke = '';
  data.types.forEach(element => {
    typeOfPoke = typeOfPoke + element + "\n";
  });

  return (
    <div className="Pokes-page">
      <div className="Pokes-page__img-wrapper">
        <img className='Pokes-page__img' src={data.imgUrl} alt=''></img>
      </div>
      <div className="Pokes-page__data">
        <h1 className="Pokes-page__name">{data.name}</h1>
        <dl className="Pokes-page__property text">
            <dt>id:  </dt>
            <dd>{data.id}</dd>
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
            <dd>{data.weight}</dd>
        </dl>
        <dl className="Pokes-page__property text">
            <dt>пойман:</dt>
            <dd>{data.caught?`${data.caughtDate.getDate()}.${data.caughtDate.getMonth()+1}.${data.caughtDate.getFullYear()}г в ${data.caughtDate.getHours()}:${data.caughtDate.getMinutes()}`:'не пойман' }</dd>
        </dl>
      </div>
    </div>
  );
}
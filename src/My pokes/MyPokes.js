import './MyPokes.css';
import React from 'react';
import { DataContext } from '../data';
import Card from '../card/Card';

export default function MyPokes() {
  const {listOfPokes} = React.useContext(DataContext);
  const cardsOfCaughtPokes = (listOfPokes.filter(item=>item.caught === true)).map(item=>
    <Card id={item.id} name={item.name} url={item.imgUrl} caught={item.caught} key={item.key}/>)
  return (
    <div className="MyPokes">
      {cardsOfCaughtPokes}
    </div>
  );
}
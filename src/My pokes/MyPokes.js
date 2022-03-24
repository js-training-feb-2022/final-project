import './MyPokes.css';
import React from 'react';
import Card from '../card/Card';

export default function MyPokes({caughtPokes}) {
  const cardsOfCaughtPokes = caughtPokes.map(item=><Card id={item.id} name={item.name} caught={item.caught} key={item.key}/>)
  return (
    <div className="MyPokes">
      {cardsOfCaughtPokes}
    </div>
  );
}
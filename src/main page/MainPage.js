import './MainPage.css';
import Card from '../card/Card';
import React from 'react';
import Pagination from '../pagination/Pagination';
import { DataContext } from '../data';

export default function MainPage(props) {
  let {countOfPokes, paginate} = props;
  const {listOfPokes} = React.useContext(DataContext);

  const renderedCards = listOfPokes.map((item)=>
    <Card id={item.id} name={item.name} caught={item.caught} key={item.key}/>);
  
  return (
    <>
      <div className='Main-page'>
        {renderedCards}
      </div>
      <Pagination cardsPerPage={10} countOfPokes={countOfPokes} paginate={paginate}/>
    </>
  )
}
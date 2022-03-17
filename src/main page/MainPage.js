import './MainPage.css';
import Card from '../card/Card';
import React from 'react';
import Pagination from '../pagination/Pagination';

export default function MainPage(props) {
  const {data, paginate} = props;
  const renderedCards = data.map((item)=>
    <Card id={item.id} name={item.name} url={item.imgUrl} caught={item.caught} key={item.key}/>);
  return (
    <>
      <div className='Main-page'>
        {renderedCards}
      </div>
      <Pagination cardsPerPage={10} totalCards={20} paginate={paginate}/>
    </>
  )
}
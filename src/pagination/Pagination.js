import React from 'react';
import { DataContext } from '../data';
import "./pagination.css"

export default function Pagination ({ cardsPerPage, countOfPokes, paginate}) {
  const [buttonsForRender, setButtonsForRender] = React.useState(0);
  const [startButton, setStartButton] = React.useState(0);

  const amountOfPages = Math.ceil(countOfPokes / cardsPerPage);

  const amountButtonsForNavigation = 10;
  
  const createButtons = (start, end) => {
    let array=[];
    for (let i=start; i<end; i++){
      let addClass = i-start+'_button button reset-button-style text'
      array.push(<button key={i+'button'} onClick={() => paginate(i+1)} className={addClass}>{i+1}</button>);
      setButtonsForRender(array);
      setStartButton(start);
    }
  }

  React.useEffect(function(){
    createButtons(0,10);
  },[]);

  function goToStart(){
    createButtons(0, amountButtonsForNavigation);
    document.querySelector('.pagination__previous').setAttribute("disabled", "disabled");
    document.querySelector('.pagination__next').removeAttribute("disabled");
  }
  function previousPages(){
    createButtons(startButton-10, startButton);
    if (startButton-10===0)
      document.querySelector('.pagination__previous').setAttribute("disabled", "disabled");
    document.querySelector('.pagination__next').removeAttribute("disabled");
  }
  function nextPages(){
    createButtons(startButton+10, startButton+20);
    if ((startButton+20)===amountOfPages)
      document.querySelector('.pagination__next').setAttribute("disabled", "disabled");
    document.querySelector('.pagination__previous').removeAttribute("disabled");
  }
  function goToEnd(){
    createButtons((amountOfPages-amountButtonsForNavigation), amountOfPages);
    document.querySelector('.pagination__next').setAttribute("disabled", "disabled");
    document.querySelector('.pagination__previous').removeAttribute("disabled");
  }
  const toStartButtonText = '<<';
  const previousButtonText = '<';
  const nextButtonText = '>';
  const toEndButtonText = '>>';

  return (
    <div className='pagination'>
      <button className='pagination__to-start button reset-button-style text' onClick={goToStart}>{toStartButtonText}</button>
      <button className='pagination__previous button reset-button-style text' onClick={previousPages}>{previousButtonText}</button>
      {buttonsForRender}
      <button className='pagination__next button reset-button-style text' onClick={nextPages}>{nextButtonText}</button>
      <button className='pagination__to-end button reset-button-style text' onClick={goToEnd}>{toEndButtonText}</button>
    </div>
  );
};
import React from "react";
import { Link } from "react-router-dom";
import { useContext } from "react";
import DataContext from '../provider';

export default function Card({id, name, onAddCatch, isBtnChange}) {
  const { setPokeId } = useContext(DataContext);

  const onClickShowCard = () => {
    setPokeId(id);   
  }

  const onClickCatch = () => {
    onAddCatch({id, name});
    isBtnChange(id);
  }

  return (  
    <div className='card flex'>
      <Link to='/pokecard'>
        <div className='' onClick={onClickShowCard}>
          <span className='card_id'>id: {id}</span>
          <p className='card_name'>{name}</p>         
        </div>
      </Link>
      <button className={isBtnChange(id) ? 'card_btn card_btn-pushed' : 'card_btn'} onClick={onClickCatch}>{isBtnChange(id) ? `Release` : `Catch`}</button>
    </div>
  )
}

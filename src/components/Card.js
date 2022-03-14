import React from "react";
import { Link } from "react-router-dom";

export default function Card({id, name, onAddCatch, isBtnChange}) {
  // const [isAdded, setIsAdded] = React.useState(true);

  const onClickCatch = () => {
    onAddCatch({id, name});
    isBtnChange(id);
    // setIsAdded(!isAdded);    
  }

  const dateCatch = () => {
    let data = new Date();    
    return data.getDate() + '.' + data.getMonth() + '.' + data.getFullYear();
  }
  // console.log(dateCatch());

  return (  
    <Link to='/pokecard'>
      <div className='card flex'>
        <span className='card_id'>id: {id}</span>
        <p className='card_name'>{name}</p>
        <button className={isBtnChange(id) ? 'card_btn card_btn-pushed' : 'card_btn'} onClick={onClickCatch}>{isBtnChange(id) ? `Release` : `Catch`}</button>
        <span>{isBtnChange(id) ? `${dateCatch()}` : null}</span>
      </div>
    </Link>
  )
}
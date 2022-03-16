import React from "react";
import { Link } from "react-router-dom";
import { useContext } from "react";
import DataContext from '../provider';

export default function Card({id, name, onAddCatch, isBtnChange}) {
  // const [isAdded, setIsAdded] = React.useState(true);
  const { setPokeId } = useContext(DataContext);

  // const onClickShowCard = () => {
  //   setPokeId(id);   
  // }

  const onClickCatch = () => {
    setPokeId(id); 
    onAddCatch({id, name});
    isBtnChange(id);
    // setIsAdded(!isAdded);    
  }
   console.log(setPokeId(id));

  // const dateCatch = () => {
  //   let data = new Date();    
  //   return data.getDate() + '.' + (data.getMonth() + 1) + '.' + data.getFullYear();
  // }
  // console.log(dateCatch());

  return (  
    <Link to='/pokecard'>
      <div className='card flex'>
        <span className='card_id'>id: {setPokeId(id)}</span>
        <p className='card_name'>{name}</p>
        <button className={isBtnChange(id) ? 'card_btn card_btn-pushed' : 'card_btn'} onClick={onClickCatch}>{isBtnChange(id) ? `Release` : `Catch`}</button>
        {/* <span>{isBtnChange(id) ? `${dateCatch()}` : null}</span> */}
      </div>
    </Link>
  )
}
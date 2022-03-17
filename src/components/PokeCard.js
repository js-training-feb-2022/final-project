import React from "react";

export default function PokeCard({name, id, weight, abilities, types}) {

  // const dateCatch = () => {
  //   let data = new Date();    
  //   return data.getDate() + '.' + (data.getMonth() + 1) + '.' + data.getFullYear();
  // }
  // console.log(dateCatch());

  // <span className="card_details">status: </span> */}
  // <span className="card_details">capture date: {true ? `${dateCatch()}` : null}</span>
  // console.log(listDetails);

  return (
    <>
      <div className='card flex card_details'>
        {/* <img className="card_img" src={img}/>         */}
        <div>
          <span className='card_id'>id: {id}</span>
          <p className='card_name'>{name}</p>     
          <p className="card_details">abilities: {abilities}</p>
          <p className="card_details">types: {types}</p>
          <span className="card_details">weight: {weight}</span>   
        </div>

        {/* {listDetails && (<>
          <img className="card_img" src={listDetails.sprites.other['official-artwork'].front_default}/>
          <div>
            <span className='card_id'>id: {listDetails.id}</span>
            <p className='card_name'>{listDetails.name}</p>            
            <p className="card_details">abilities: {listDetails.abilities.map((item) => (`${item.ability.name + ', '}`)) }</p>
            <p className="card_details">types: {listDetails.types.map((item) => (`${item.type.name + ', '}`)) }</p>
            <span className="card_details">weight: {listDetails.weight}</span>
          </div>
        </>)}  */}
      </div> 
    </>       
  )
}

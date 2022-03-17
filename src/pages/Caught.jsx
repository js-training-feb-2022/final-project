import React from "react";

export default function Caught({items = []}) {
  return (
    <>
      <h1 className="title">Caught pokemons</h1>
      <div className="wrapper flex wrap">        
        {items.map((obj) => (
          <div key={obj.id} className='card flex'>
            <span className='card_id'>id: {obj.id}</span>
            <p className='card_name'>{obj.name}</p>
          </div>
        ))}      
      </div>
    </>
  )
}
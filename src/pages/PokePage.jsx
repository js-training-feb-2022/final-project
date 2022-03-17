import React from "react";
import PokeCard from "../components/PokeCard";

export default function PokePage({listDetails}) {
  console.log(listDetails);

  return (
    <div>
      <h1 className="title">Pokemon personal card</h1>
      {<PokeCard
        id={listDetails.id}
        name={listDetails.name} 
        weight={listDetails.weight} 
        // abilities={abilities} 
        
        // abilities={listDetails.abilities[0].ability.name}
        
        // types={listDetails.types[0].type.name}
        // abilities={listDetails.abilities.map((item) => (item.ability.name))}
       
        // img={listDetails.sprites.other['official-artwork'].front_default}

        />
      }
      {/* {listDetails.map((item, index) => (
        <PokeCard 
          name={item.name} 
          id={item.id}
          key={index}
          weight={item.weight}          
        />
      ))} */}
    </div>
    
  )
}
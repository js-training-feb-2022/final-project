import React from 'react';
import List from '../../Containers/ListContainer';
import capitalize from '../../Utils/capitalize';
import normalize from '../../Utils/normalize';
import './pokemon.scss';

function Pokemon(props) {
  return (
    <div className='pokemon'>
      <div className='pokemonImage pokemonBg-additional'>
        <img src={props.image} />
        <div className={props.pokeballClass}>
          <div className='pokeball__button'></div>
        </div>
      </div>
      <div className='pokemonInfo'>
        <div className='pokemonInfo-Header'>
          <div className='pokemonInfo-Name'>{props.pokemonName} <span className='pokemonInfo-Id'>#{props.pokemonId}</span></div>
        </div>
        <div className='pokemonInfo-Main pokemonBg-additional'>
          <b>Weight</b> 
          <p>{props.pokemonWeight}</p>
          <b>Abilities</b>
          <ul><List tag='li' name='ability' list={props.pokemonAbilities} doSomething={normalize}/></ul>
          <b>Types</b>
          <div className='types'><List tag='div' className='pill' isType={true} name='type' list={props.pokemonTypes} doSomething={capitalize}/></div>
          {props.caughtDate}
        </div>
      </div>
    </div>
  );
}

export default Pokemon;

import React, { useContext, useState } from 'react';
import PokemonCardComponent from '../Components/PokemonCardComponent';
import { PokemonContext } from '../Context/PokemonContext';
import InfiniteScroll from 'react-infinite-scroll-component';
import CatchButtonContainer from './CatchButtonContainer';

export default function CapturedPokemonsContainer() {
  const {capturedPokemonList} = useContext(PokemonContext);
  const [count, setCount] = useState({
    prev: 0,
    next: 10
  });
  const [hasMore, setHasMore] = useState(true);
  const [current, setCurrent] = useState(capturedPokemonList.slice(count.prev, count.next));
  const getMoreData = () => {
    if (current.length === capturedPokemonList.length) {
      setHasMore(false);
      return;
    }  
      setCurrent(current.concat(capturedPokemonList.slice(count.prev + 10, count.next + 10)))
      setCount((prevState) => ({ prev: prevState.prev + 10, next: prevState.next + 10 }))
  };
  return (
    <>
    <InfiniteScroll  
    dataLength={current.length}
    next={getMoreData}
    hasMore={hasMore}>
      <main className='main'>         
         {current.length >0 
          ? current.map((pokemon, index)=>(
            <div key={index} className="card">
              <div className='card-wrapper'>
                <PokemonCardComponent pokemon={pokemon} index = {pokemon.index}/>
                <CatchButtonContainer pokemon={pokemon} index={index}/>
              </div>
              
            </div>)) 
          : (<p> No pokemons here...</p>)
          }
      </main>
    </InfiniteScroll>  
    </>
     )
};


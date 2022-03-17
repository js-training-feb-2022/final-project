import './App.scss';
import React from 'react';
import axios from 'axios';
import PokemonCardContainer from './Containers/PokemonCardContainer';

function Home() {
  const [pokemons, setPokemons] = React.useState([]);
  const [nextUrl, setNextUrl] = React.useState(null);
  const [currentUrl, setCurrentUrl] = React.useState('https://pokeapi.co/api/v2/pokemon');

  React.useEffect(() => {
    axios.get(currentUrl).then(({data}) => data).then(({ results, next, previous }) => {
      setPokemons(p => [...p, ...results]);
      setNextUrl(next);
    });
  }, [currentUrl])
  
  const pokemonsList = pokemons.map(({ name, url }) => <PokemonCardContainer name={name} url={url} />);

  return (
      <div className='main'>
        <div className='pokemons'>{pokemonsList}</div>
        <button className='button' onClick={() => setCurrentUrl(nextUrl)}>Load more</button>
      </div>
  );
}

export default Home;

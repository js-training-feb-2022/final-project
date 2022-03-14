import { Link } from 'react-router-dom';

export default function PokemonCardComponent({pokemon, index}) {
  return (
     <Link className='card-link' to={`/${index}`}>
      <h3 className='card-text'> Id: {index}</h3>
      <p className='card-text'> Name: {pokemon.name}</p>      
     </Link>

  )
};


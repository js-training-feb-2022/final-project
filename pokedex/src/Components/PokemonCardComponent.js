import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';


export default function PokemonCardComponent({pokemon, index}) {
  return (
     <Link className='card-link' to={`/${index}`}>
      <h3 className='card-text'> Id: {index}</h3>
      <p className='card-text'> Name: {pokemon.name}</p>      
     </Link>

  )
};
PokemonCardComponent.propTypes={
  pokemon: PropTypes.object.isRequired,
  index: PropTypes.number.isRequired
}
PokemonCardComponent.defaultProps={
  pokemon: {
    name: 'Some pokemon'
  },
  index: 0,
}



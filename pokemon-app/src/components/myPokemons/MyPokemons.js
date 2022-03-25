import { useState, useEffect } from 'react';
import Spinner from '../spinner/Spinner'
import '../pokemonList/pokemonList.scss'
const MyPokemons = ({myPokemons}) => {
    const [myPokemonsList, setMyPokemonList] = useState(myPokemons);
    const pokemons = myPokemonsList.length ? renderPokemons(myPokemonsList) : <Spinner/>; 

    function renderPokemons(pokemons) {

        const items = pokemons.map(item => {
                return <li 
                    className="char__item" 
                    key={item.id} 
                >
                    <p className='char__name'>{item.name}</p>
                    <p>id: {item.id}</p>
                    <img src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/${item.id}.png`} alt={item.name}/>
                    <p>Catched: {item.date}</p>
                </li>
            // }
        })
        return (
            <ul className="char__grid">
                {items}
            </ul>
        )
    }

    return(
        <div className='char__list'>
            {pokemons}
        </div>
    )
    
}

export default MyPokemons;
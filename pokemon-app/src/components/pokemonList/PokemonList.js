import {useState, useEffect, useContext} from 'react';
import usePokemonService from "../../services/usePokemonService";
import {Link} from 'react-router-dom'
import ErrorMessage from "../errorMessage/ErrorMessage";
import Spinner from "../spinner/Spinner";
import Button from '../button/Button';
import './pokemonList.scss'

const PokemonList = ({onPokemonSelected, onPokemonCatched}) => {
    const [pokemonList, setPokemonList] = useState([]);
    const [additionaLoading, setAdditionaLoading] = useState(false);
    const [offset, setOffset] = useState(0);
    const [listEnded, setListEnded] = useState(false);


    const {loading, error, getPokemons} = usePokemonService();

    useEffect(() => {
        onRequest(offset, true);
    }, []) 

    const onRequest = (offset, initial) => {
        initial ? setAdditionaLoading(false) : setAdditionaLoading(true);
        getPokemons(offset)
            .then(onPokemonListLoaded)
    }

    const onPokemonListLoaded = (newPokemonList) => {
        let ended = false;
        if (newPokemonList.length + pokemonList.length > 897) { 
            ended = true;
        }

        setPokemonList(pokemonList => [...pokemonList, ...newPokemonList]);
        setAdditionaLoading(false);
        setOffset(offset => offset + 15);
        setListEnded(ended)
    }
    
    function renderPokemons(arr) {
        const items = arr.map((item) => {
            return (
                <li 
                className="char__item" 
                key={item.id} 
                style={{'display': item.id > 898 ? 'none' : 'block'}}
                >
                <Link to={'/info'}>
                    <div onClick={() => onPokemonSelected(item.id)}>
                    <p className='char__name'>{item.name}</p>
                    <p>{item.id}</p>
                    <img src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/${item.id}.png`} alt={item.name}/>
                    </div>
                </Link>
                <Button 
                    id={item.id}
                    name={item.name}
                    catching={false}
                    addPokemon={() => {
                        let date = new Date();
                        date = `${date.getDate()}/${date.getMonth()+1}/${date.getFullYear()} ${date.getHours()}:${date.getMinutes()}`
                        return onPokemonCatched(item.id, item.name, date)}} 
                    style={null}
                ></Button>
                </li>
            )
        })

        return (
            <ul className="char__grid">
                {items}    
            </ul>
        )
    }

    const items = renderPokemons(pokemonList);
    const errorMessage = error ? <ErrorMessage/> : null;
    const spinner = loading && !additionaLoading ? <Spinner size={'large'}/> : null;

    return (
        <div className="char__list">
            {errorMessage}
            {spinner}
            {items}
            <button 
                className="button listButton"
                disabled={additionaLoading}
                style={{'display': listEnded ? 'none' : 'block'}}
                onClick={() => onRequest(offset)}>
                <div className="inner">load more</div>
            </button>
        </div>
    )


}

export default PokemonList;
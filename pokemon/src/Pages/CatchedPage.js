import React from "react";
import {useDispatch, useSelector} from "react-redux";
import {releasePokemons} from "../store/requestReducer";
import '../style/navBar.css';
import {Link} from "react-router-dom";

const CatchedPage = () => {
    const dispatch = useDispatch();
    const catchedPokemons = useSelector(state => state.pokemons.catchedPokemons);
    const pokemons = useSelector(state => state.pokemons.items);

    const releasePokemon = (name) => {
        pokemons.results.map(item => {
            if (name === item.name)
                return item.isCatch = false;
            dispatch(releasePokemons(name));
        })
    }
    if (catchedPokemons.length === 0) {
        return (
            <div className={'catched-pokemons-null'}>
                <h3> You dont have any catched pokemons</h3>
            </div>
        )
    } else
        return (
            <div>
                <div className={'card-wrapper'}>
                    {catchedPokemons.map((item, i) => (
                        <div key={i} className={'each-card'}>
                            <Link
                                to={`/${item.id}`}>
                                <h3 className={'each-card__name'}>{item.name}</h3>
                                <br/>
                                <div className={'each-card__id'}>{item.id}</div>
                                <img className={'general-page-images'} src={item.url}/>
                            </Link>
                            <button
                                className={'card-wrapper__button'}
                                onClick={() => releasePokemon(item.name)}
                            >Release
                            </button>
                        </div>
                    ))}
                </div>
            </div>
        )
}

export default CatchedPage;

import React, {useEffect} from "react";
import {useSelector, useDispatch} from "react-redux";
import {getPokemons} from "../actions/action";
import {Link} from "react-router-dom";
import '../style/navBar.css';
import {setCatchedPokemon, releasePokemons} from "../store/requestReducer";

const MainPage = ({main}) => {
    const dispatch = useDispatch();
    const pokemons = useSelector(state => state.pokemons.items);
    const catchedPokemons = useSelector(state => state.pokemons.catchedPokemons);
    const isFetching = useSelector(state => state.pokemons.isFetching);

    useEffect(() => {
        if (main === 'main'){
            let res = '';
            if (catchedPokemons.length !== 0) {
                res = catchedPokemons.map(item => {
                    return item.name;
                });
            }
            return dispatch(getPokemons('', res));
        }

        if (catchedPokemons.length !== 0) {
            console.log(pokemons)
                return pokemons;
        }
        dispatch(getPokemons());
    }, []);

    const nextPage = () => {
        let res = '';
        if (catchedPokemons.length !== 0) {
            res = catchedPokemons.map(item => {
                return item.name;
            })
        }
        dispatch(getPokemons(pokemons.next.replace('https://pokeapi.co/api/v2/pokemon', ''), res));
    };

    const previosPage = () => {
        let res = '';
        if (catchedPokemons.length !== 0) {
            res = catchedPokemons.map(item => {
                return item.name;
            })
        }
        dispatch(getPokemons(pokemons.previous.replace('https://pokeapi.co/api/v2/pokemon', ''), res));
    };

    const catchPokemon = (name, id, url) => {
        const date = new Date().toLocaleString();

        const pokemon = {
            name,
            id,
            url,
            isCatch: true,
            date: date,
        }
        pokemons.results.map(item => {
            if (name === item.name) {
                return item.isCatch = true;
            }
        });
        for (let i = 0; i < catchedPokemons.length; i++) {
            if (catchedPokemons[i].name === name) {
                return name;
            }
        }
        dispatch(setCatchedPokemon(pokemon));
    };

    const releasePokemon = (name) => {
        pokemons.results.map(item => {
                if (name === item.name) {
                    dispatch(releasePokemons(name));
                    return item.isCatch = false;
                }
            });
    };

    if (!isFetching) {
        return <div>Загрузка...</div>;
    } else {
        return (
            <div className={'wrapper'}>
                <div className={'main-page-navigation'}>
                    <button className={'nav-button'} onClick={previosPage}>Previos page</button>
                    <button className={'nav-button'} onClick={nextPage}>Next page</button>
                </div>
                <div className={'card-wrapper'}>
                    {
                        pokemons.results.map((item, i) =>
                            <div className={'each-card'} key={i}>
                                <Link
                                    to={`/${parseInt(item.url.replace('https://pokeapi.co/api/v2/pokemon/', ''))}`}>
                                    <div className={'each-card__link'}>
                                        <h3 className={'each-card__name'}>{item.name}</h3>
                                        <img alt={`pokemon`}
                                             className={'general-page-images'}
                                             src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/${parseInt(item.url.replace('https://pokeapi.co/api/v2/pokemon/', ''))}.png`}/>
                                        <h4 className={'each-card__id'}>
                                            {parseInt(item.url.replace('https://pokeapi.co/api/v2/pokemon/', ''))}
                                        </h4>
                                    </div>
                                </Link>
                                {
                                    item.isCatch === true
                                        ?
                                        <button className={'card-wrapper__button'}
                                                onClick={() => releasePokemon(item.name, `${parseInt(item.url.replace('https://pokeapi.co/api/v2/pokemon/', ''))}`)}
                                        >Release
                                        </button>
                                        :
                                        <button className={'card-wrapper__button'}
                                                onClick={() => catchPokemon(item.name, `${parseInt(item.url.replace('https://pokeapi.co/api/v2/pokemon/', ''))}`, `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/${parseInt(item.url.replace('https://pokeapi.co/api/v2/pokemon/', ''))}.png`)}
                                        >Catch
                                        </button>
                                }
                            </div>
                        )
                    }
                </div>
            </div>
        );
    }
}

export default MainPage;


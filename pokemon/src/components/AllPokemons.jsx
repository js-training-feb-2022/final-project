import React, {useEffect, useState} from "react";
import axios from "axios";
import {Link, useHistory} from "react-router-dom";

import '../style/navBar.css'

// const Main = () => {
//     const dispatch = useDispatch()
//     const repos = useSelector(state => state.repos.items)
//
//     useEffect(()=>{
//         dispatch(getRepos())
//     }, [])


function AllPokemons() {
    const [allPokemons, setAllPokemons] = useState('');
    const [idPokemon, setIdPokemon] = useState([]);
    const [isFetch, setIsFetch] = useState(false);
    const [error, setError] = useState('');

    useEffect(() => {
        axios.get(`https://pokeapi.co/api/v2/pokemon?limit=12`)
            .then((result) => {
                console.log(result)
                 setAllPokemons(result.data)
                setIsFetch(true)
            })
            .catch(e => {
                setError(e)
                console.log(e)
                setIsFetch(true)
            })
    }, [])

    function ShowMeMore() {
        console.log(idPokemon)
    }

    const NextPage = async () => {
        await axios.get(allPokemons.next)
            .then((result) => {
                setAllPokemons(result.data)
                console.log(result)
            })
            .catch(e => {
                setError(e)
                console.log(e)
            })
    }

    const PreviousPage = async () => {
        await axios.get(allPokemons.previous)
            .then((result) => {
                setAllPokemons(result.data)
                setIsFetch(true)
                console.log(result)
            })
            .catch(e => {
                setError(e)
                console.log(e)
            })
    }

    const CatchPokemon = () => {
    }

    if (!isFetch) {
        return <div>Загрузка...</div>;
    } else {
        return (
            <div className={'wrapper'}>

                <div className={'card-wrapper'}>
                    {allPokemons.results.map((item, i) =>
                        <div className={'each-card'} key={i}>
                            <Link to={`/${parseInt(item.url.replace('https://pokeapi.co/api/v2/pokemon/', ''))}`}>
                                <h4>Pokemon Name:</h4>
                                <h4>{item.name}</h4>
                                <h4>Id:</h4>
                            {parseInt(item.url.replace('https://pokeapi.co/api/v2/pokemon/', ''))}
                                <h2>{idPokemon[i]}</h2>
                            </Link>
                            <button className={'catch-button'} onClick={CatchPokemon}>Catch</button>
                        </div>
                    )}
                </div>
                <div className={'nav-buttons'}>
                    <button onClick={ShowMeMore}>ShowMeMore</button>
                    <button onClick={PreviousPage}>next page</button>
                    <button onClick={NextPage}>next page</button>
                </div>
            </div>

        );
    }
}

export default AllPokemons;

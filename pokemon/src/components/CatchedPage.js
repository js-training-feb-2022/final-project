import React from "react";
import {useDispatch, useSelector} from "react-redux";
import '../style/navBar.css'
import {releasePokemons} from "../store/requestReducer";

const CatchedPage = () => {
    const dispatch = useDispatch()
    const catchedPokemons = useSelector(state => state.pokemons.catchedPokemons)
    const pokemons = useSelector(state => state.pokemons.items)

    // const res = pokemons.results.map((item, i) => {
    //      if(item.name === catchedPokemons[i])
    //          return item.name
    // })

    const showMeMore = () => {
        console.log(catchedPokemons[1].url)
    }
    const releasePokemon = (name) => {
        // pokemons.results.map(item => {
        //     if (name === item.name) {
        //         return item.isCatch = false;
        //     }
                dispatch(releasePokemons(name))
        // })
    }

    return (
        <div>
             <div className={'card-wrapper'}>
            {catchedPokemons.map((item, i) => (
                <div key={i} className={'each-card'}>
                    <div className={'each-card__name'}>

                    {item.name}
                    </div>
                    <br/>
                    <div className={'each-card__id'}>

                    {item.id}
                    </div>
                    <img className={'general-page-images'} src={item.url}/>
                    <button className={'card-wrapper__button'}
                            onClick={() => releasePokemon(item.name)}
                    >Release
                    </button>
                </div>
            ))}
        <button onClick={showMeMore}>showMeMore</button>
             </div>
        </div>
    )
}

export default CatchedPage;

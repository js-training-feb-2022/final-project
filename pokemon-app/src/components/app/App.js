import { useState, useEffect } from 'react';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom'

import AppHeader from '../appHeader/AppHeader';
import PropTypes from 'prop-types'
import PokemonList from '../pokemonList/PokemonList';
import RandomPokemon from '../randomPokemon/RandomPokemon';
import PokemonInfo from '../pokemonInfo/PokemonInfo';
import ErrorBoundary from '../ErrorBoundary/ErrorBoundary'
import MyPokemons from '../myPokemons/MyPokemons'

import './App.scss';



const App = () => {
    const [selectedPokemon, setSelectedPokemon] = useState(null);

    const [myPokemons, setMyPokemons] = useState([]);
    const idArr = myPokemons.map(item => item.id)
    

    const onPokemonSelected = (id) => {setSelectedPokemon(id)}

    console.log(myPokemons)

    const onPokemonCatched = (id, name, date, isCatched) => {
        if (idArr.includes(id)) {return}
        setMyPokemons([...myPokemons, {id, name, isCatched, date}]);
    }

        return (
            <Router>
                <div className='app'>
                    <AppHeader/>
                    <main>
                       <Switch>
                            <Route exact path='/'>
                                <ErrorBoundary>
                                    <RandomPokemon onPokemonSelected={onPokemonSelected}/>
                                </ErrorBoundary>
                                <ErrorBoundary>
                                    <PokemonList onPokemonSelected={onPokemonSelected} onPokemonCatched={onPokemonCatched}/>
                                </ErrorBoundary>
                            </Route>
                            <Route exact path='/info'>
                                <ErrorBoundary>
                                    <PokemonInfo pokemonId={selectedPokemon}/>
                                </ErrorBoundary>
                            </Route>
                            <Route exact path='/mypokemons'>
                                <ErrorBoundary>
                                    <MyPokemons myPokemons={myPokemons}/>
                                </ErrorBoundary>
                            </Route>
                       </Switch>
                    </main>
             </div>
            </Router>
        )
}

App.propTypes = {
    onPokemonSelected: PropTypes.func
}

export default App;
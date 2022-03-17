import React from 'react';
import './App.css';
import { Provider } from 'react-redux';
import store from './redux/redux-store'
import {Route, Routes, Navigate} from "react-router-dom";
import Header from './components/Header/Header';
import PokemonsListContainer from './components/PokemonsList/PokemonsListContainer';
import CaughtPokemonsContainer from './components/CaughtPokemons/CaughtPokemonsContainer';
import PokemonPageContainer from './components/PokemonPage/PokemonPageContainer';
import { PageNotFound } from './components/common/PageNotFound/PageNotFound404';

const App = () => {

  const getIdFromURL = (url) => {
    return Number(url.split("pokemon/")[1].match(/\d+/));
  }

  return (
    <Provider store={store}>
      <Header />
        <Routes>
          <Route exact path="/" element = {<Navigate to="/main" />} />
          <Route path="*" element = {<PageNotFound />} />
          <Route path="/main/*" element = {<PokemonsListContainer getIdFromURL = {getIdFromURL}/>} />
          <Route path="/caught/*" element = {<CaughtPokemonsContainer getIdFromURL = {getIdFromURL}/>} />
          <Route path="/pokemon/:pokemonId" element = {<PokemonPageContainer getIdFromURL = {getIdFromURL}/> } />
        </Routes>
    </Provider>
  );

}

export default App;
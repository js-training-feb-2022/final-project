import './App.css';
import React from 'react'
import {
  BrowserRouter as Router,
  Route,
  Routes, 
} from "react-router-dom";

import CapturedPokemonsContainer from './Containers/CapturedPokemonsContainer';
import { HeaderContainer } from './Containers/HeaderContainer';
import { PokemonProvider } from './Context/PokemonContext';
import PokemonListContainer from './Containers/PokemonListContainer';
import PokemonPageContainer from './Containers/PokemonPageContainer';
function App() {
  return (
    <PokemonProvider>
      <Router>
       <HeaderContainer />
        <Routes>
          <Route path="/" element ={<PokemonListContainer />}/>
          <Route  path="/captured" element ={<CapturedPokemonsContainer />}/>
          <Route path="/:index" element={<PokemonPageContainer />} />
        </Routes>
       </Router>
    </PokemonProvider>

    )}

export default App;

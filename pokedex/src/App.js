import React from 'react';
import {
  BrowserRouter as Router,
  Route,
  Routes, 
} from "react-router-dom";
import './Styles/App.css'

import CapturedPokemonsContainer from './Containers/CapturedPokemonsContainer';
import { PokemonProvider } from './Context/PokemonContext';
import PokemonListContainer from './Containers/PokemonListContainer';
import PokemonPageContainer from './Containers/PokemonPageContainer';
import { HeaderComponent } from './Components/HeaderComponent';
function App() {
  return (
    <PokemonProvider>
      <Router>
        <HeaderComponent />
        <Routes>
          <Route path="/" element ={<PokemonListContainer />}/>
          <Route  path="/captured" element ={<CapturedPokemonsContainer />}/>
          <Route path="/:index" element={<PokemonPageContainer />} />
        </Routes>
       </Router>
    </PokemonProvider>

    )};

export default App;

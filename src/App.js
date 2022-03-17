import React from 'react';
import Home from './Home';
import PokemonPageContainer from './Containers/PokemonPageContainer';
import HeaderContainer from './Containers/HeaderContainer';
import CatchedPokemonsContainer from './Containers/CaughtPokemonsContainer';
import { Route, BrowserRouter as Router, Routes } from 'react-router-dom';
import { createContext } from 'react';

export const PokeContext = createContext(null);

function App() {
  const [catched, setCatched] = React.useState([]);
  return (
    <PokeContext.Provider value={{ catched, setCatched }}>
      <Router>
        <HeaderContainer />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/caught" element={<CatchedPokemonsContainer />} />
          <Route path="/:pokemonId" element={<PokemonPageContainer />} />
        </Routes>
      </Router>
    </PokeContext.Provider>
  );
}

export default App;

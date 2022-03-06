import { MainContainer } from './containers/MainContainer';
import { Routes, Route, NavLink } from 'react-router-dom';
import { CaughtPokemonsContainer } from './containers/CaughtPokemonsContainer';
import { PokemonPageContainer } from './containers/PokemonPageContainer';
function App() {
  return (
    <div className='App'>
      <header>
        <NavLink to='/'>Main</NavLink>
        <NavLink to='/caught'>Caught</NavLink>
      </header>
      <Routes>
        <Route path='/' element={<MainContainer />} />
        <Route path='/caught' element={<CaughtPokemonsContainer />} />
        <Route path='/pokemon/:pokemonId' element={<PokemonPageContainer />} />
      </Routes>
    </div>
  );
}

export default App;

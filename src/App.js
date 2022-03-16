import { MainContainer } from './containers/MainContainer';
import { Routes, Route, NavLink } from 'react-router-dom';
import { CaughtPokemonsContainer } from './containers/CaughtPokemonsContainer';
import { PokemonPageContainer } from './containers/PokemonPageContainer';
import { Header } from './components/Header/Header';
import './App.scss';

function App() {
  return (
    <div className='App'>
      <Header />
      <Routes>
        <Route path='/final-project/' element={<MainContainer />} />
        <Route path='/caught' element={<CaughtPokemonsContainer />} />
        <Route path='/pokemon/:pokemonId' element={<PokemonPageContainer />} />
      </Routes>
    </div>
  );
}

export default App;

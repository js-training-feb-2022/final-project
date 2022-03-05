import { MainContainer } from './containers/MainContainer';
import { Routes, Route, NavLink } from 'react-router-dom';
import { CaughtPokemonsContainer } from './containers/CaughtPokemonsContainer';
function App() {
  return (
    <div className='App'>
      <header>
        <NavLink to='/caught'>Caught</NavLink>
      </header>
      <Routes>
        <Route path='/' element={<MainContainer />} />
        <Route path='/caught' element={<CaughtPokemonsContainer />} />
      </Routes>
    </div>
  );
}

export default App;

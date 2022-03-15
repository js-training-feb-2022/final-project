import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './Containers/Home'
import Header from './Containers/Header'
import CaughtPokemonList from './Containers/CaughtPokemonList'
import { PokemonProvider } from './Utils/PokemonContext'
import './App.css';

function App() {
  return (
    
      <Router>
        <PokemonProvider>
        <Header />
        <Routes>
          <Route exact path="*" element={<Home />} />
          <Route exact path="/final-project/caught" element={<CaughtPokemonList />} />
        </Routes>
        </PokemonProvider>
      </Router>
    
  );
}

export default App;
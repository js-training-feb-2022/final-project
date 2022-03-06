import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import './index.css'
import { 
  BrowserRouter as Router, 
  Routes,
  Route, 
} from 'react-router-dom';
import Favorites from './pages/Favorites';
import Watched from './pages/Watched';
import Details from './pages/Details';
import { MovieContextProvider } from './util/MovieContext';

const navigation = (
  <Router>
    <MovieContextProvider>
      <Routes>
        <Route exact path="/" element={<App/>} />
        <Route path="/favorites" element={<Favorites/>} />
        <Route path="/watched" element={<Watched/>} />
        <Route path="/details" element={<Details/>} />
      </Routes>
    </MovieContextProvider>   
  </Router>
)

ReactDOM.render(
  navigation,
  document.getElementById('root')
);


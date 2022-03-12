import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import './index.css'
import { 
  HashRouter as Router, 
  Routes,
  Route, 
} from 'react-router-dom';
import Favorites from './pages/Favorites';
import Watched from './pages/Watched';
import Details from './pages/Details';
import axios from 'axios';

export const MovieContext = React.createContext();

const Navigation = () => {

  const savedFavorites = localStorage.getItem('favoritesList');
  const initialFavorites = JSON.parse(savedFavorites);
  const savedWatched = localStorage.getItem('watchedList');
  const initialWatched = JSON.parse(savedWatched);

  const [favoritesList, setFavoritesList] = React.useState(initialFavorites || []);
  const [watchedList, setWatchedList] = React.useState(initialWatched || []);

  const [movieData, setData] = React.useState({});
  const [pageNum, setPageNum] = React.useState(18);

  const baseURL = "https://imdb-api.com/en/API/Top250Movies/k_yj1kxps8";
  
  React.useEffect(function() {
    axios.get(baseURL)
    .then(response => {
      setData({
        allData: response.data, 
        movies: response.data.items.slice(0, 18)
      });
    })
    }, []);

  if (Object.keys(movieData).length === 0) return null;

  return (
  <Router>
    <MovieContext.Provider value={{
      movieData,
      setData,
      pageNum,
      setPageNum,
      favoritesList,
      setFavoritesList,
      watchedList,
      setWatchedList
    }}>
      <Routes>
        <Route exact path="/" element={<App/>} />
        <Route path="/favorites" element={<Favorites />} />
        <Route path="/watched" element={<Watched/>} />
        <Route path="/:id" element={<Details />} />
      </Routes>
    </MovieContext.Provider>   
  </Router>
  )
}

ReactDOM.render(
  <Navigation />,
  document.getElementById('root')
);


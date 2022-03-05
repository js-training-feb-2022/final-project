import React from 'react';
import './App.css';
import Card from './components/Card';
import Header from './components/Header'
import { MovieContext } from './util/MovieContext';

// import InfiniteScroll from 'react-infinite-scroll-component';

const App = () => {

  const { movieData } = React.useContext(MovieContext);

  if (!movieData) return null;

  const movies = movieData.items.slice(0, 12);
  const movieCards = movies.map(movie => 
    <Card  
    image={movie.image} 
    key={movie.id}
    id={movie.id} 
    year={movie.year}
    />)
  
  return (
    <div className="content">
      <Header />
        <div className="cards">
          {movieCards}
        </div>
    </div>
  );
}

export default App;

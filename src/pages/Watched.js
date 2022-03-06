import React from 'react';
import Card from '../components/Card';
import { MovieContext } from '../util/MovieContext';
import { Link } from 'react-router-dom';
import Button from '@mui/material/Button';

export default function Watched() {
 
  const { watchedList, movieData } = React.useContext(MovieContext);
 
  const watchedMovies = movieData.allData.items
  .filter(movie => watchedList.some(elem => elem.includes(movie.id)))
  .map(movie => 
    <Card 
      image={movie.image} 
      year={movie.year} 
      id={movie.id} 
      key={movie.id}
    />
    )

  return (
      <div class="appContent pagesContent">
        <Link to="/" className='link'>
          <Button variant="contained" color="secondary" className="homeButton">Home</Button>
        </Link>
        <h1 className="pagesHeading">👁️ Watched 👁️</h1>
        <div class="cards">
          {watchedMovies}
        </div>
      </div> 
  )
}
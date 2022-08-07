import React from 'react';
import MovieList from '../components/MovieList';
import { Link } from 'react-router-dom';
import Button from '@mui/material/Button';
import { MovieContext } from '../index.js'

export default function Watched() {
 
  const { watchedList, movieData } = React.useContext(MovieContext);

  if (Object.keys(movieData).length === 0) return null;

  const watchedMovies = movieData.allData.items
  .filter(movie => watchedList.some(elem => elem.includes(movie.id)))

  return (
      <div className="appContent pagesContent">
        <Link to="/" className='link'>
          <Button variant="contained" color="secondary" className="homeButton">Home</Button>
        </Link>
        <h1 className="pagesHeading">👁️ Watched 👁️</h1>
        <MovieList collection={watchedMovies}/>
        </div> 
  )
}
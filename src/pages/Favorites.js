import React from 'react';
import { Link } from 'react-router-dom';
import Button from '@mui/material/Button';
import { MovieContext } from '../index.js';
import MovieList from '../components/MovieList';

export default function Favorites() {

  const { favoritesList, movieData } = React.useContext(MovieContext);

  if (Object.keys(movieData).length === 0) return null;

  const favoriteMovies = movieData.allData.items
  .filter(movie => favoritesList.includes(movie.id))

  return (
    <div className="appContent pagesContent">
    <Link to="/" className="link">
          <Button variant="contained" color="secondary">Home</Button>
    </Link>
    <h1 className="pagesHeading">❤️ Favorites ❤️</h1>
    <MovieList collection={favoriteMovies}/>
    </div>
  )
}
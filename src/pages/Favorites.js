import React from 'react';
import Card from '../components/Card';
import { Link } from 'react-router-dom';
import Button from '@mui/material/Button';
import { MovieContext } from '../util/MovieContext';
export default function Favorites() {

  const { favoritesList, movieData } = React.useContext(MovieContext);

  const favoriteMovies = movieData.allData.items
  .filter(movie => favoritesList.includes(movie.id))
  .map(movie => <Card image={movie.image} year={movie.year} id={movie.id} key={movie.id}/>)

  return (
    <div className="appContent pagesContent">
    <Link to="/" className="link">
          <Button variant="contained" color="secondary">Home</Button>
    </Link>
    <h1 className="pagesHeading">❤️ Favorites ❤️</h1>
    <div className="cards">
    {favoriteMovies}
    </div>
    </div>
  )
}
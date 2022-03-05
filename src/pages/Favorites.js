import React from 'react';
import Card from '../components/Card';
// import movieData from '../movieData';
import { Link } from 'react-router-dom';
import Button from '@mui/material/Button';
import { MovieContext } from '../util/MovieContext';
export default function Favorites() {

  const { favoritesList, movieData } = React.useContext(MovieContext);
 
  const favoriteMovies = movieData.items
  .filter(movie => favoritesList.includes(movie.id))
  .map(movie => <Card image={movie.image} year={movie.year} id={movie.id} />)

  return (
    <div class="content">
    <Link to="/" className="link"><Button color="secondary">Home</Button></Link>
    <h1 className="pagesHeading">❤️ Favorites ❤️</h1>
    <div class="cards">
    {favoriteMovies}
    </div>
    </div>
  )
}
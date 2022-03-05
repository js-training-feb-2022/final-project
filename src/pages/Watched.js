import React from 'react';
import Card from '../components/Card';
// import movieData from '../movieData';
import { MovieContext } from '../util/MovieContext';
import { Link } from 'react-router-dom';
import Button from '@mui/material/Button';

export default function Watched() {
 
  const { watchedList, movieData } = React.useContext(MovieContext);
 
  const watchedMovies = movieData.items
  .filter(movie => watchedList.includes(movie.id))
  .map(movie => <Card image={movie.image} year={movie.year} id={movie.id} key={movie.id}/>)

  return (
      <div class="content">
        <Link to="/" className='link'><Button color="secondary">Home</Button></Link>
        <h1 className="pagesHeading">👁️ Watched 👁️</h1>
        <div class="cards">
          {watchedMovies}
        </div>
      </div> 
  )
}
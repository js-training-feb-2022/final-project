import React from 'react'
import { Link } from 'react-router-dom';
import Button from '@mui/material/Button';
import { MovieContext } from '../util/MovieContext';
import './Details.css'

export default function Details() {
  const { detailsId, movieData } = React.useContext(MovieContext);
  const movie = movieData.items.filter(movie => movie.id === detailsId)[0];

  if (!detailsId) return null;

  return (
    <div>
      <Link to="/" className='link'><Button>Home</Button></Link>
      <h1>{movie.fullTitle}</h1>
      <img src={movie.image} alt="" className='poster'></img>
      <p>{`Crew: ${movie.crew}`}</p>
      <p>{`imDbRating: ${movie.imDbRating}`}</p>
    </div>
  )
}
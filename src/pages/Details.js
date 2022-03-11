import React from 'react'
import { Link, useParams } from 'react-router-dom';
import Button from '@mui/material/Button';
import { MovieContext } from '../util/MovieContext';
import './Details.css'

export default function Details() {
  const { movieData, watchedList } = React.useContext(MovieContext);

  let params = useParams();
  let detailsId = params.id;

  const movie = movieData.allData.items.filter(movie => movie.id === detailsId)[0];

  const isWatched = (id) => watchedList.some(elem => elem.includes(id));

  const getWatchedDate = (id) => watchedList.filter(elem => elem.includes(id))[0][1]; 

  return (
    <div className="appContent pagesContent">
      <Link to="/" className='link'><Button variant="contained" color="secondary" className="homeButton">Home</Button></Link>
      <h1 className="pagesHeading">🎥 {movie.fullTitle} 🎥</h1>
      <div className="details">
        <img src={movie.image} alt="" className='poster'></img>
        <div className="details-text">
          <p>{`Crew: ${movie.crew}`}</p>
          <p>{`IMDb Rating: ${movie.imDbRating}`}</p>
          <p>{`Year: ${movie.year}`}</p>
          <p>{`Rank: #${movie.rank} in TOP250`}</p>
          <p>{ isWatched(detailsId) ? `Watched on ${getWatchedDate(detailsId)}` : "Not watched yet" }</p>
        </div>
      </div>
    </div>
  )
}
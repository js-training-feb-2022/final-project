import React from 'react'
import { Link, useParams } from 'react-router-dom';
import Button from '@mui/material/Button';
import { MovieContext } from '../index.js';
import imageResize from '../util/imageResize'
import axios from 'axios';
import './Details.css'

export default function Details() {
  let params = useParams();
  let detailsId = params.id;

  const profileURL = `https://imdb-api.com/en/API/Title/k_yj1kxps8/${params.id}`;

  const [ movie, setMovie ] = React.useState(null);
  const { watchedList } = React.useContext(MovieContext);
  const [loading, setLoading] = React.useState(true)

  React.useEffect(function() {
    axios.get(profileURL)
    .then(response => {
      setMovie(response.data);
    })
    }, [profileURL]);  

  if (!movie) return null;

  const isWatched = (id) => watchedList.some(elem => elem.includes(id));
  
  const getWatchedDate = (id) => watchedList.filter(elem => elem.includes(id))[0][1]; 

  const loadHandler = () => {
    setLoading(false);
  }

  return (
    <div className="appContent pagesContent">
      <Link to="/" className='link'>
        <Button variant="contained" color="secondary" className="homeButton">Home</Button>
      </Link>
      <h1 className="pagesHeading">🎥 {movie.fullTitle} 🎥</h1>
      <div className={`loader ${loading ? "" : "hide"}`}></div>
      <div className={`details ${loading ? "hide" : ""}`}>
        <img src={imageResize(movie.image)} alt="" className='poster' onLoad={loadHandler} ></img>
        <div className="details-text">
          <p>{`Stars: ${movie.stars}`}</p>
          <p>{`Writers: ${movie.writers}`}</p>
          <p>{`IMDb Rating: ${movie.imDbRating}`}</p>
          <p>{`Year: ${movie.year}`}</p>
          <p>{ isWatched(detailsId) ? `Watched on ${getWatchedDate(detailsId)}` : "Not watched yet" }</p>
        </div> 
      </div> 
    </div>
  )
}
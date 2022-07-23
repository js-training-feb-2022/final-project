import React from 'react';
import './Card.css'
import Button from '@mui/material/Button';
import Chip from '@mui/material/Chip';
import { Link } from 'react-router-dom';
import { MovieContext } from '../index';

export default function Card({ image, year, id, isLiked, isWatched, likeToggle, watchedToggle }) {

  const { favoritesList, watchedList } = React.useContext(MovieContext);

  React.useEffect(() => {
    localStorage.setItem('favoritesList', JSON.stringify(favoritesList));
  }, [favoritesList]);

  React.useEffect(() => {
    localStorage.setItem('watchedList', JSON.stringify(watchedList));
  }, [watchedList]);

  let [isLoaded, setisLoaded] = React.useState(false);

  return (
    <div className={`card ${isLoaded ? "" : "hide"}`}>
    <Link to={`/${id}`}>
      <img 
        src={image} 
        alt="" 
        className="movieImage" 
        id={id} onLoad={() => setisLoaded(true)}
      />
    </Link>
      <Chip 
        className="year" 
        color="primary" 
        label={year}>
      </Chip>      
      <span 
        className="like" 
        onClick={likeToggle} 
        id={id}>{ isLiked(id) ? '❤️' : '🤍' }
      </span>
      <span className="watched">
        <Button 
          variant="contained" 
          size="small" 
          fontSize="0.5rem" 
          color={isWatched(id) ? "success" : "secondary"} 
          onClick={watchedToggle} 
          id={id}>{ isWatched(id) ? 'watched ✔️' : 'to watch'}
        </Button>
      </span>   
  </div>
  );
}
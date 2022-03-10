import React from 'react';
import './Card.css'
import Button from '@mui/material/Button';
import Chip from '@mui/material/Chip';
import { MovieContext } from '../util/MovieContext';
import { Link } from 'react-router-dom';
import { format } from 'date-fns';

export default function Card({ image, year, id }) {

  const { setDetailsId, favoritesList, setFavoritesList, watchedList, setWatchedList } = React.useContext(MovieContext);

  React.useEffect(() => {
    localStorage.setItem('favoritesList', JSON.stringify(favoritesList));
  }, [favoritesList]);

  React.useEffect(() => {
    localStorage.setItem('watchedList', JSON.stringify(watchedList));
  }, [watchedList]);

  const [isLoaded, setisLoaded] = React.useState(false);

  function likeToggle(event) {
    if (!favoritesList.includes(event.target.id)) {
      setFavoritesList(prevList => {
        return [
          ...prevList,
          event.target.id
        ]
      }) 
    } else {
      setFavoritesList(prevList => {
        return prevList.filter(elem => elem !== event.target.id)
      })
    }  
  }

  function watchedToggle(event) {
    if (!watchedList.some(elem => elem.includes(event.target.id))) {
      setWatchedList(prevList => {
        return [
          ...prevList,
          [event.target.id, format(new Date(), 'dd MMM yyyy')]
        ]
      }) 
    } else {
      setWatchedList(prevList => {
        return prevList.filter(elem => !elem.includes(event.target.id))
      })
    }  
  }

  function isLiked(id) {
    return favoritesList.includes(id);
  }

  function isWatched(id) {
    return watchedList.some(elem => elem.includes(id));
  }

  function toDetails(event) {
    setDetailsId(event.target.id);
  }

  return (
    <div className="card">
      <Link to="/details">
        <img 
          src={image} 
          alt="" 
          className="movieImage" 
          onClick={toDetails} 
          id={id} 
          onLoad={() => setisLoaded(true)}
        />
        </Link>
    {
      isLoaded && 
      (
        <>
          <Chip className="year" color="primary" label={year}></Chip>      
          <span className="like" onClick={likeToggle} id={id}>{ isLiked(id) ? '❤️' : '🤍' }</span>
          <span className="watched"><Button variant="contained" size="small" fontSize="0.5rem" color={isWatched(id) ? "success" : "secondary"} onClick={watchedToggle} id={id}>{ isWatched(id) ? 'watched ✔️' : 'to watch'}</Button></span>
        </>
        
      )
    }
    </div>
  );
}
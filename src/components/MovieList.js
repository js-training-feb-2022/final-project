import React from 'react';
import Card from './Card';
import { MovieContext } from '../index.js'
import { format } from 'date-fns';

export default function MovieList({ collection }) {

  const { favoritesList, watchedList, setWatchedList, setFavoritesList } = React.useContext(MovieContext);

  return collection.map(movie => {

    function isLiked(id) {
      return favoritesList.includes(id);
    }
  
    function isWatched(id) {
      return watchedList.some(elem => elem.includes(id));
    }

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

    return (
    <Card  
    image={movie.image} 
    key={movie.id}
    id={movie.id} 
    year={movie.year}
    isLiked = {isLiked}
    isWatched = {isWatched}
    likeToggle = {likeToggle}
    watchedToggle = {watchedToggle}
    />
    )
  })
}
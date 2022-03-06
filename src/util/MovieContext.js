import React from 'react';
import axios from 'axios';

export const MovieContext = React.createContext();

export const MovieContextProvider = ({children}) => {

  const savedFavorites = localStorage.getItem('favoritesList');
  const initialFavorites = JSON.parse(savedFavorites);
  const savedWatched = localStorage.getItem('watchedList');
  const initialWatched = JSON.parse(savedWatched);

  const [favoritesList, setFavoritesList] = React.useState(initialFavorites || []);
  const [watchedList, setWatchedList] = React.useState(initialWatched || []);
  const [detailsId, setDetailsId] = React.useState(null);
  const [movieData, setData] = React.useState({});
  const [pageNum, setPageNum] = React.useState(18);

  const baseURL = "https://imdb-api.com/en/API/Top250Movies/k_yj1kxps8";

  React.useEffect(function() {
    axios.get(baseURL)
    .then(response => {
      setData({
        allData: response.data, 
        movies: response.data.items.slice(0, pageNum)
      });
    })
    }, []);

    const contextValue = {
      pageNum,
      setPageNum,
      movieData,
      setData,
      detailsId,
      setDetailsId,
      favoritesList,
      setFavoritesList,
      watchedList,
      setWatchedList
    }

  return (
    <MovieContext.Provider value={contextValue}>
      {children}
    </MovieContext.Provider>
  )
}
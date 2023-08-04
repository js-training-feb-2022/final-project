import React from 'react';
import './App.css';
import Header from './components/Header'
import InfiniteScroll from 'react-infinite-scroll-component';
import MovieList from './components/MovieList'
import { MovieContext } from './index.js';

const App = () => {

  const { movieData, setData } = React.useContext(MovieContext);
  const { pageNum, setPageNum } = React.useContext(MovieContext);
  if(Object.keys(movieData).length === 0 ) return null;

  const movieCards = movieData.movies;

  const fetchMoreData = () => {
    setTimeout(() => {
      setData(prevData => {
        return {
        ...prevData, 
        movies: prevData.movies.concat(prevData.allData.items.slice(pageNum, pageNum + 12))
        }
      });
      setPageNum(prevNum => prevNum + 12);
    }, 500);
  }

  return (
    <div className="appContent">
      <Header />      
      <InfiniteScroll
        dataLength={movieData.movies.length}
        next={fetchMoreData}
        hasMore={true}
        loader={<h4>{movieData.movies.length === 250 ? "All movies loaded" : "Loading..."}</h4>}
      >
        <MovieList collection={movieCards}/>
      </InfiniteScroll>
    </div>
  );
}

export default App;

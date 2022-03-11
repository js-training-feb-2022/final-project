import React from 'react';
import './App.css';
import Card from './components/Card';
import Header from './components/Header'
import { MovieContext } from './util/MovieContext';
import InfiniteScroll from 'react-infinite-scroll-component';

const App = () => {

  const { movieData, setData, pageNum, setPageNum } = React.useContext(MovieContext);

  if(Object.keys(movieData).length === 0) return null;

  const movieCards = movieData.movies.map(movie => {
    return (
    <Card  
    image={movie.image} 
    key={movie.id}
    id={movie.id} 
    year={movie.year}
    />
    )
  })

  const fetchMoreData = () => {
    setTimeout(() => {
      setData(prevData => {
        return {
        ...prevData, 
        movies: prevData.movies.concat(prevData.allData.items.slice(pageNum, pageNum + 6))
        }
      });
      setPageNum(prevNum => prevNum + 6);
    }, 1000);
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
        <div className="cards">
          {movieCards}
        </div>
      </InfiniteScroll>
    </div>
  );
}

export default App;

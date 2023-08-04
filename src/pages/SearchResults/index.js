import React from "react";
import { Link, useParams } from "react-router-dom";
import Button from "@mui/material/Button";
import { MovieContext } from "../../index.js";
import MovieList from "../../components/MovieList";

export default function SearchResults() {
  const { searchPhrase } = useParams();
  const { movieData } = React.useContext(MovieContext);

  if (Object.keys(movieData).length === 0) return null;

  const foundMovies = movieData.allData.items.filter((movie) =>
    movie.fullTitle.toLowerCase().includes(searchPhrase.toLowerCase())
  );

  return (
    <div className="appContent pagesContent">
      <Link to="/" className="link">
        <Button variant="contained" color="secondary">
          Home
        </Button>
      </Link>
      <h1 className="pagesHeading">Search Results</h1>
      <MovieList collection={foundMovies} />
    </div>
  );
}

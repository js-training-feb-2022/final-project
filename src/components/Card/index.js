import React from "react";
import "./Card.css";
import Button from "@mui/material/Button";
import Chip from "@mui/material/Chip";
import { Link } from "react-router-dom";

const Card = React.memo(function Card({ image, year, id, isLiked, isWatched }) {
  let [isLoaded, setisLoaded] = React.useState(false);

  return (
    <div className={`card ${isLoaded ? "" : "hide"}`}>
      <Link to={`/${id}`}>
        <img
          src={image}
          alt=""
          className="movieImage"
          id={id}
          onLoad={() => setisLoaded(true)}
        />
      </Link>
      <Chip className="year" color="primary" label={year}></Chip>
      <span className="like" id={id}>
        {isLiked ? "❤️" : "🤍"}
      </span>
      <div className="watched">
        <Button
          className="watched"
          variant="contained"
          size="small"
          fontSize="0.5rem"
          color={isWatched ? "success" : "secondary"}
          id={id}
        >
          {isWatched ? "watched ✔️" : "to watch"}
        </Button>
      </div>
    </div>
  );
});

export default Card;

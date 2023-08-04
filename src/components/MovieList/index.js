import React, { useCallback } from "react";
import Card from "../Card";
import { MovieContext } from "../../index.js";
import { format } from "date-fns";
import imageResize from "../../util/imageResize";

export default function MovieList({ collection }) {
  const { favoritesList, watchedList, setWatchedList, setFavoritesList } =
    React.useContext(MovieContext);

  console.log("list rerendered");

  React.useEffect(() => {
    localStorage.setItem("favoritesList", JSON.stringify(favoritesList));
  }, [favoritesList]);

  React.useEffect(() => {
    localStorage.setItem("watchedList", JSON.stringify(watchedList));
  }, [watchedList]);

  const isLikedCheck = useCallback(
    (id) => {
      return favoritesList.includes(id);
    },
    [favoritesList]
  );

  const isWatchedCheck = useCallback(
    (id) => {
      return watchedList.some((elem) => elem.includes(id));
    },
    [watchedList]
  );

  const likeToggle = (event) => {
    if (!isLikedCheck(event.target.id)) {
      setFavoritesList((prevList) => {
        return [...prevList, event.target.id];
      });
    } else {
      setFavoritesList((prevList) => {
        return prevList.filter((elem) => elem !== event.target.id);
      });
    }
  };

  const watchedToggle = (event) => {
    if (!isWatchedCheck(event.target.id)) {
      setWatchedList((prevList) => {
        return [
          ...prevList,
          [event.target.id, format(new Date(), "dd MMM yyyy")],
        ];
      });
    } else {
      setWatchedList((prevList) => {
        return prevList.filter((elem) => !elem.includes(event.target.id));
      });
    }
  };

  const handleClick = (e) => {
    if (e.target.className === "like") {
      likeToggle(e);
    } else if (Array.from(e.target.classList).includes("watched")) {
      watchedToggle(e);
    }
  };

  const cards = collection.map((movie) => {
    const isLiked = isLikedCheck(movie.id, favoritesList);
    const isWatched = isWatchedCheck(movie.id, watchedList);

    return (
      <Card
        image={imageResize(movie.image)}
        key={movie.id}
        id={movie.id}
        year={movie.year}
        isLiked={isLiked}
        isWatched={isWatched}
      />
    );
  });

  return (
    <div className="cards" onClick={handleClick}>
      {cards}
    </div>
  );
}

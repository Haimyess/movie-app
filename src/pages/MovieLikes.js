/** @format */

import React, { useContext } from "react";
import MovieCard from "../components/MovieCard";

import { LikeContext } from "../contexts/LikeContext";

// styles
import "../styles/movieslikes.css";

function MovieLikes() {
  const { likes } = useContext(LikeContext);
  console.log(likes);
  return (
    // Movies that we clicked like
    <>
      {likes.length === 0 ? (
        <div>
          <p>No likes yet</p>
        </div>
      ) : (
        <section className='likes-wrapper'>
          <h1>Likes</h1>

          <div
            style={{
              display: "flex",
              columnGap: "2rem",
              rowGap: "3rem",
              flexWrap: "wrap",
              justifyContent: "flex-start",
              flexDirection: "row",
              marginTop: "2.5rem",
            }}>
            {likes.map((movie) => {
              return (
                <div key={movie.id}>
                  <MovieCard movie={movie} />{" "}
                </div>
              );
            })}
          </div>
        </section>
      )}
    </>
  );
}

export default MovieLikes;

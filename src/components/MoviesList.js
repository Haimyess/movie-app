/** @format */

import React, { useState } from "react";
import MovieCard from "./MovieCard";

function MoviesList({ movie, filteredMovies, loading }) {
  return (
    <section className='movies'>
      {loading ? (
        <div>Loading</div>
      ) : (
        filteredMovies.map((movie) => {
          return (
            <div key={movie.id}>
              <MovieCard movie={movie} />
            </div>
          );
        })
      )}
    </section>
  );
}

export default MoviesList;

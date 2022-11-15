/** @format */

import React from "react";
import Search from "./Search";

import "../styles/filter.css";
import { useEffect } from "react";

function Filter({ movies, setFilteredMovies, genre, setGenre }) {
  useEffect(() => {
    if (genre === 0) {
      setFilteredMovies(movies);
      return;
    }

    // We want to see if a movie contains the genre id, becuase its an array of numbers.

    const filter = movies.filter((movie) => movie.genre_ids.includes(genre));

    setFilteredMovies(filter);
  }, [genre]);

  return (
    <div className='general-filter'>
      <div className='filter-btns'>
        {/* {catBtn.map((btn) => {
          return (
            <button value={btn.genre_ids.map((cat) => cat.toString())}></button>
          );
        })} */}

        <button className='cat-btn' onClick={() => setGenre(0)}>
          All
        </button>

        <button className='cat-btn' onClick={() => setGenre(878)}>
          Science Fiction
        </button>

        <button className='cat-btn' onClick={() => setGenre(28)}>
          Action
        </button>
        <button className='cat-btn' onClick={() => setGenre(35)}>
          Comedy
        </button>
        <button className='cat-btn' onClick={() => setGenre(27)}>
          Horror
        </button>
        <button className='cat-btn' onClick={() => setGenre(14)}>
          Fantasy
        </button>
        <button className='cat-btn' onClick={() => setGenre(10751)}>
          Family
        </button>
      </div>

      <Search />
    </div>
  );
}

export default Filter;

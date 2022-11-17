/** @format */

import React, { useContext } from "react";

import { ThemeContext } from "../contexts/DarkModeContext";

import { Link } from "react-router-dom";

import Checkbox from "@mui/material/Checkbox";
import FavoriteBorder from "@mui/icons-material/FavoriteBorder";
import Favorite from "@mui/icons-material/Favorite";

function MovieCard({ movie }) {
  const { isLike, setIsLike, likes, setLikes, handleLike } =
    useContext(ThemeContext);
  // const {} = movie;
  return (
    <div key={movie.id}>
      <Link className='movie-link' to={`/movie/${movie.id}`}>
        <div className='movie-card'>
          <div className='movie-img-container'>
            <img
              className='movie-img'
              src={`https://image.tmdb.org/t/p/w500/${movie.poster_path}`}
            />
          </div>
          <div className='movie-info'>
            <p className='movie-title'>{movie.title}</p>
            {/* 
            <Checkbox
              style={{
                position: "relative",
                Index: "2",
                padding: ".2rem 0",
                zIndex: "2",
              }}
              onClick={() => handleLike(movie)}
              icon={<FavoriteBorder />}
              checkedIcon={isLike ? <Favorite /> : <FavoriteBorder />}
              name='checkedH'
            /> */}
          </div>
          {movie.vote_average === 0 ? (
            ""
          ) : (
            <div className='rating-wrapper'>
              <span className='rating-container'>
                <h2 className='rating'>
                  {Number(movie.vote_average).toFixed(1)}
                </h2>
              </span>
            </div>
          )}
        </div>
      </Link>
      {/* </Link> */}
    </div>
  );
}

export default MovieCard;

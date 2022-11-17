/** @format */

import React, { useEffect, useState, useContext } from "react";
import axios from "axios";

import Checkbox from "@mui/material/Checkbox";
import FavoriteBorder from "@mui/icons-material/FavoriteBorder";
import Favorite from "@mui/icons-material/Favorite";
import { FormControlLabel } from "@mui/material";

// Contexts
import { LikeContext } from "../contexts/LikeContext";
import { ThemeContext } from "../contexts/DarkModeContext";

import { useParams } from "react-router-dom";

import "../styles/moviepage.css";

function MoviePage() {
  const [movie, setMovie] = useState([]);
  // const [movieImages, setMovieImages] = useState([]);
  const [loading, setLoading] = useState(true);

  const { likes, setLikes, isLike, setIsLike, handleLike } =
    useContext(LikeContext);
  const { themeMode } = useContext(ThemeContext);

  const params = useParams();

  useEffect(() => {
    const getMovie = async () => {
      const movieUrl = `https://api.themoviedb.org/3/movie/${params.movieid}?api_key=50395059f53249a5a21f7f2fad96e49c&language=en-US`;

      try {
        const response = await axios.get(movieUrl);

        setMovie([response.data]);
        setLoading(false);
      } catch (err) {
        console.log(err);
      }
    };
    getMovie();
  }, []);

  return (
    <main className='single-movie-wrapper'>
      {loading ? (
        <p>loading</p>
      ) : (
        movie.map((singleMovie) => {
          console.log(singleMovie);
          return (
            <div key={singleMovie.id}>
              <section className='singlemovie-container'>
                {/* Image */}
                <div>
                  <img
                    className='singlemovie-poster'
                    src={`https://image.tmdb.org/t/p/w500/${singleMovie.poster_path}`}
                  />
                </div>

                <div className='single-movie-info-container'>
                  <h1 className='singlemovie-title'>{singleMovie.title}</h1>
                  <p className='movie-tag'>{singleMovie.tagline}</p>
                  <span>
                    {singleMovie.genres.map((genre, i) => (
                      <span className='movie-genre' key={i}>
                        {genre.name}, &nbsp;
                      </span>
                    ))}
                  </span>

                  <div>
                    {/* <button onClick={() => handleLike(singleMovie)}>
                      Like
                    </button> */}

                    {/* control={<Checkbox icon={<FavoriteBorder />} 
                  checkedIcon={<Favorite />} */}

                    <FormControlLabel
                      control={
                        <Checkbox
                          className='fav-icon'
                          id={themeMode}
                          onClick={() => handleLike(singleMovie)}
                          // style={{ color: isLike ? "#e8eaed" : "#000000d7" }}
                          icon={<FavoriteBorder />}
                          checkedIcon={<Favorite />}
                          checked={isLike}
                        />
                      }
                      // label='Instagram Like Button'
                    />
                  </div>

                  {/* movie info */}
                  <div>
                    <p className='about-movie'>About the movie</p>
                    <p className='movie-overview'>{singleMovie.overview}</p>

                    <div className='single-movie-info'>
                      <p className='movie-release'>
                        <span className='movie-bold-text'>
                          Date of release:
                        </span>{" "}
                        {singleMovie.release_date}
                      </p>
                      {/* <p>{singleMovie.spoken_languages}</p> */}
                      {singleMovie.runtime === 0 ? (
                        ""
                      ) : (
                        <p className='movie-duration'>
                          {" "}
                          <span className='movie-bold-text'>
                            Duration:
                          </span>{" "}
                          {singleMovie.runtime} min
                        </p>
                      )}
                    </div>
                  </div>
                </div>
              </section>
            </div>
          );
        })
      )}
    </main>
  );
}

// Individual movie page.
/* 
        1. Title
        2. Image
        3. Description
        4. Rate
        5. Actors
        6. Year of release
        7. Comments
        8. Make a comment
        9. Share 
*/

export default MoviePage;

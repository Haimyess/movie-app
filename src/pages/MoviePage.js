/** @format */

import React, { useEffect, useState, useContext } from "react";
import axios from "axios";

import IconButton from "@mui/material/IconButton";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import FavoriteIcon from "@mui/icons-material/Favorite";

import { LikeContext } from "../contexts/LikeContext";

import { useParams } from "react-router-dom";

import "../styles/moviepage.css";

function MoviePage() {
  const [movie, setMovie] = useState([]);
  // const [movieImages, setMovieImages] = useState([]);
  const [loading, setLoading] = useState(true);

  const { likes, setLikes, isLike, setIsLike } = useContext(LikeContext);
  console.log([movie]);
  console.log(likes);

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

  const handleLike = (clickedMovie) => {
    const exist = likes.find((movie) => {
      return movie.id === clickedMovie.id;
    });

    if (!exist) {
      const updatedLikes = [...likes, clickedMovie];
      setLikes(updatedLikes);
    } else {
      const deleteFromLikes = likes.filter(
        (like) => like.id !== clickedMovie.id
      );
      setLikes([...deleteFromLikes]);
    }

    // if (!isLike) {
    //   if (!exist) {
    //     const updatedLikes = [...likes, clickedMovie];
    //     setLikes(updatedLikes);
    //   }
    // } else {
    //   const deleteMovie = likes.filter((mov) => mov.id !== clickedMovie);
    //   setLikes(deleteMovie);
    // }
  };

  return (
    <main>
      {loading ? (
        <p>loading</p>
      ) : (
        movie.map((singleMovie) => {
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
                  <p>{singleMovie.tagline}</p>
                  <span>
                    {singleMovie.genres.map((genre, i) => (
                      <span key={i}> {genre.name} </span>
                    ))}
                  </span>

                  <div>
                    {/* <button onClick={() => handleLike(singleMovie)}>
                      Like
                    </button> */}

                    <IconButton onClick={() => handleLike(singleMovie)}>
                      {likes.includes(singleMovie.id) ? (
                        <FavoriteIcon />
                      ) : (
                        <FavoriteBorderIcon />
                      )}
                      {/* {like.includes(singleMovie) ? (
                        <FavoriteIcon />
                      ) : (
                        <FavoriteBorderIcon />
                      )} */}
                    </IconButton>
                  </div>
                </div>
              </section>
              <section>
                <p>About the movie</p>
                <p>{singleMovie.overview}</p>

                <div>
                  <p>{singleMovie.release_date}</p>
                  {/* <p>{singleMovie.spoken_languages}</p> */}
                  <p>{singleMovie.runtime}</p>
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

/** @format */

import React from "react";

import { Outlet } from "react-router-dom";
import "../styles/movielayout.css";

// Importing components
import MovieHeader from "../components/MovieHeader";

function MovieLayout() {
  return (
    <section className='movie-background'>
      <div className='movie-wrapper'>
        <MovieHeader />
        <Outlet />
      </div>
    </section>
  );
}

export default MovieLayout;

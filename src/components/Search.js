/** @format */

import React, { useContext, useEffect, useState } from "react";

import axios, { Axios } from "axios";

import "../styles/moviessearch.css";

import { ThemeContext } from "../contexts/DarkModeContext";

// import SearchIcon from "@mui/icons-material/Search";

function Search({ movies, setFilteredMovies }) {
  console.log(movies);
  // context
  const { themeMode } = useContext(ThemeContext);
  const [searchTerm, setSearchTerm] = useState("");

  const handleSearch = (e) => {
    setSearchTerm(e.target.value);
    console.log(searchTerm);

    const filterMovies = movies.filter((movie) => {
      return movie.title.toLowerCase().includes(searchTerm.toLowerCase());
    });

    setFilteredMovies(filterMovies);
  };

  // useEffect(() => {
  //   handleSearch();
  // }, [searchTerm]);
  // ---------------------------------------------------------------
  // -------IMPLEMENT LATER( SEARCH ALL MOVIES) PUT IN HEADER-------
  // ---------------------------------------------------------------

  // states
  // const [searchTerm, setSearchTerm] = useState("");
  // const [searchMovies, setSearchMovies] = useState([]);

  // console.log(searchTerm);

  // const handleSearch = async () => {
  //   const apiUrl = `https://api.themoviedb.org/3/search/movie?api_key=50395059f53249a5a21f7f2fad96e49c&language=en-US&query=${searchTerm}&page=1&include_adult=false`;

  //   try {
  //     const res = await axios.get(apiUrl);
  //     console.log(res.data);

  //     setSearchMovies(res.data);
  //   } catch (err) {
  //     // Handle Error Here
  //     console.error(err);
  //   }
  // };

  // useEffect(() => {
  //   handleSearch();
  // }, [searchTerm]);

  // ----------------------------------------------------------------
  // ----------------------------------------------------------------

  return (
    <div className='movies-search'>
      {/* <SearchIcon /> */}

      <form className='search-background-form'>
        <input
          id={themeMode}
          className='search-input'
          type='search'
          placeholder='Search movies...'
          // value={searchTerm}
          onChange={handleSearch}
          // The following code is for the general search in the header
          // value={searchTerm}
          // onChange={(e) => setSearchTerm(e.target.value)}
        />
      </form>

      <div>
        {/* {searchedMovies.map((movie) => {
          return <p>{movie.title}</p>;
        })} */}
      </div>
    </div>
  );
}

export default Search;

// <form class="nosubmit">
//   <input class="nosubmit" type="search" placeholder="Search...">
// </form>

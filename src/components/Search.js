/** @format */

import React, { useContext } from "react";

import "../styles/moviessearch.css";

import { ThemeContext } from "../contexts/DarkModeContext";

// import SearchIcon from "@mui/icons-material/Search";

function Search() {
  const [themeMode] = useContext(ThemeContext);
  return (
    <div className='movies-search'>
      {/* <SearchIcon /> */}

      <form className='search-background-form'>
        <input
          id={themeMode}
          className='search-input'
          type='search'
          placeholder='Search movies...'
        />
      </form>
    </div>
  );
}

export default Search;

// <form class="nosubmit">
//   <input class="nosubmit" type="search" placeholder="Search...">
// </form>

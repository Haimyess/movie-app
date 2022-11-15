/** @format */

import React from "react";

import "../styles/moviessearch.css";

import SearchIcon from "@mui/icons-material/Search";

function Search() {
  return (
    <div className='movies-search'>
      {/* <SearchIcon /> */}

      <form className='search-background-form'>
        <input
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

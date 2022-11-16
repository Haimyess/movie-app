/** @format */

import React, { useContext } from "react";
import { NavLink, Link } from "react-router-dom";
// import Search from "./Search";

// import ArrowBackIcon from "@mui/icons-material/ArrowBack";

import "../styles/movieheader.css";

// Material UI
// import { styled } from "@mui/material/styles";
// import FormControlLabel from "@mui/material/FormControlLabel";

import LightModeIcon from "@mui/icons-material/LightMode";
import NightlightIcon from "@mui/icons-material/Nightlight";
import Switch from "@mui/material/Switch";

// Contexts
import { ThemeContext } from "../contexts/DarkModeContext";

function MovieHeader() {
  const [themeMode, setThemeMode] = useContext(ThemeContext);

  const handleTheme = () => {
    setThemeMode((curr) => (curr === "lightMode" ? "darkMode" : "lightMode"));
  };

  return (
    <header className='movie-header'>
      <div>
        {/* <div style={{ display: "inline-block" }}>
          <Link className='back-link' to='/projects'>
            <div className='back-link-container'>
              {" "}
              <span>
                <ArrowBackIcon />
              </span>
              back to projects
            </div>
          </Link>
        </div> */}

        <div>
          <p className='logo' id={themeMode}>
            TheMovieApp
          </p>
        </div>
      </div>

      <nav className='movie-nav'>
        <LightModeIcon
          style={{ color: themeMode === "lightMode" ? "black" : "#e8eaed" }}
        />
        <Switch onChange={handleTheme} />
        <NightlightIcon
          style={{ color: themeMode === "lightMode" ? "black" : "#e8eaed" }}
        />

        <NavLink
          className='movie-nav-links popular'
          id={themeMode}
          to='/'
          end={true}>
          Popular Movies
        </NavLink>
        <NavLink
          className='movie-nav-links likes'
          to='/movies/likes'
          end={true}>
          Likes
        </NavLink>
      </nav>
    </header>
  );
}

export default MovieHeader;

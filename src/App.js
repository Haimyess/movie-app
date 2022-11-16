/** @format */

import React, { useContext } from "react";
import { Routes, Route } from "react-router-dom";
import "./App.css";
import { LikeProvider } from "../src/contexts/LikeContext";
import MovieLayout from "./pages/MovieLayout";
import PopularMovies from "./pages/PopularMovies";
import MovieLikes from "../src/pages/MovieLikes";
import MoviePage from "./pages/MoviePage";
import { ThemeContext } from "../src/contexts/DarkModeContext";

function App() {
  const [themeMode, setThemeMode] = useContext(ThemeContext);

  // console.log(themeMode);
  return (
    // <div className='app'>
    <div id={themeMode}>
      <div className='app'>
        <Routes>
          <Route
            path='/'
            element={
              <LikeProvider>
                <MovieLayout />
              </LikeProvider>
            }>
            {/* popular movies with filter */}
            <Route index element={<PopularMovies />} />
            {/* likes page */}
            <Route path='movies/likes' element={<MovieLikes />} />
            {/* Individual movie page */}
            <Route path='movie/:movieid' element={<MoviePage />} />
          </Route>
        </Routes>
      </div>
    </div>
  );
}

export default App;

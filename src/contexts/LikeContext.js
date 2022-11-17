/** @format */

import React, { useState, createContext, useEffect } from "react";

export const LikeContext = createContext();

export const LikeProvider = ({ children }) => {
  // array of likes

  const fromLocal = JSON.parse(localStorage.getItem("likes") || "[]");
  const [likes, setLikes] = useState(fromLocal);

  const [isLike, setIsLike] = useState(false);

  const handleLike = (clickedMovie) => {
    // e.preventPropagation();
    const exist = likes.find((movie) => {
      return movie.id === clickedMovie.id;
    });

    if (!exist) {
      const updatedLikes = [...likes, clickedMovie];
      setLikes(updatedLikes);
      setIsLike(true);
    } else {
      const deleteFromLikes = likes.filter(
        (like) => like.id !== clickedMovie.id
      );
      setLikes([...deleteFromLikes]);
      setIsLike(false);
    }
  };

  useEffect(() => {
    localStorage.setItem("likes", JSON.stringify(likes));
  }, [likes]);

  return (
    <LikeContext.Provider
      value={{ likes, setLikes, isLike, setIsLike, handleLike }}>
      {children}
    </LikeContext.Provider>
  );
};

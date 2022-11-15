/** @format */

import React, { useState, createContext, useEffect } from "react";

export const LikeContext = createContext();

export const LikeProvider = ({ children }) => {
  // array of likes

  const fromLocal = JSON.parse(localStorage.getItem("likes") || "[]");
  const [likes, setLikes] = useState(fromLocal);

  const [isLike, setIsLike] = useState(false);

  useEffect(() => {
    localStorage.setItem("likes", JSON.stringify(likes));
  }, [likes]);

  return (
    <LikeContext.Provider value={{ likes, setLikes, isLike, setIsLike }}>
      {children}
    </LikeContext.Provider>
  );
};

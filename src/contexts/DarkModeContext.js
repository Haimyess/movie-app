/** @format */

import React, { createContext, useState, useEffect } from "react";

export const ThemeContext = createContext();

export const ThemeProvider = ({ children }) => {
  const fromLocalTheme = JSON.parse(
    localStorage.getItem("theme") || "darkMode"
  );
  const [themeMode, setThemeMode] = useState(fromLocalTheme);
  const fromLocalSwitch = JSON.parse(
    localStorage.getItem("themeSwitch") || "false"
  );
  const [themeChecked, setThemeChecked] = useState(fromLocalSwitch);

  useEffect(() => {
    localStorage.setItem("theme", JSON.stringify(themeMode));
    localStorage.setItem("themeSwitch", JSON.stringify(themeChecked));
  }, [themeMode, themeChecked]);

  return (
    <ThemeContext.Provider
      value={{ themeMode, setThemeMode, setThemeChecked, themeChecked }}>
      {children}
    </ThemeContext.Provider>
  );
};

import React, { useState } from 'react';
const DarkThemeContext = React.createContext();

const DarkThemeProvider = ({ children }) => {
  const [darkMode, setDarkMode] = useState(
    localStorage.getItem('darkMode') || false
  );
  console.log(localStorage.getItem('darkMode'));

  const setTheme = (theme) => {
    setDarkMode(theme);
    localStorage.setItem('darkMode', theme);
  };
  document.body.setAttribute('data-theme', darkMode ? 'dark' : 'light');
  return (
    <DarkThemeContext.Provider value={{ darkMode, setTheme }}>
      {children}
    </DarkThemeContext.Provider>
  );
};

export { DarkThemeContext, DarkThemeProvider };

import React, { useContext } from 'react';
import { DarkThemeContext } from './darkThemeContext';
import './App.css';
import Chart from './chart/chart';

const App = () => {
  const { darkMode, setTheme } = useContext(DarkThemeContext);
  console.log(darkMode);
  return (
    <div className='App'>
      <div>
        <button
          className='fab'
          type='primary'
          onClick={() => {
            setTheme(!darkMode);
          }}
        >
          <p>Change</p>
        </button>
      </div>
      <Chart />
    </div>
  );
};

export default App;

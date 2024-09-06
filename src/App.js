import logo from './logo.svg';
import React from 'react';
import './App.css';
import { ThemeProvider } from './Component/ThemeContext';
import ThemeComponent from './Component/ThemeComponent';

function App() {
  return (
    
    <ThemeProvider>
      <ThemeComponent />
    </ThemeProvider>
  );
}

export default App;

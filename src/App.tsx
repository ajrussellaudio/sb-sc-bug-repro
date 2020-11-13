import React from 'react';
import logo from './logo.svg';
import './App.css';
import Button from './components/Button';
import { ThemeProvider } from 'styled-components';
import theme from './theme';

function App() {
  return (
    <ThemeProvider theme={theme}>
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <Button />
        </header>
      </div>
    </ThemeProvider>
  );
}

export default App;

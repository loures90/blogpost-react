import React, { useState } from 'react';
import { ThemeProvider } from '@material-ui/core/styles'
import theme from './constants/theme';
import Router from './router/router';
import Header from './componentes/Header';
import { BrowserRouter, useHistory } from 'react-router-dom';

function App() {
  const token = localStorage.getItem("token")
  const [rightButton, setRightButton]=useState(token ? "Logout" : "Login")
  return (
    <ThemeProvider theme={theme} >
      <BrowserRouter>
        <Header rightButton={rightButton} setRightButton={setRightButton}/>
        <Router rightButton={rightButton} setRightButton={setRightButton}/>
      </BrowserRouter>

    </ThemeProvider>
  );
}

export default App;

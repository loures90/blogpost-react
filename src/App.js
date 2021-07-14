import React from 'react';
import { ThemeProvider } from '@material-ui/core/styles'
import theme from './constants/theme';
import Router from './router/router';
function App() {
  return (
    <ThemeProvider theme={theme} >
      <Router/>
    </ThemeProvider>
  );
}

export default App;

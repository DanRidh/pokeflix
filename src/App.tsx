import React from 'react';
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import { createTheme, ThemeProvider } from '@mui/material';
import './App.css';
import Navbar from './components/Navbar';
import Favorites from './pages/Favorites';
import Landing from './pages/Landing';

function App() {
  const theme = createTheme({
    typography: {
      fontFamily: 'PT Sans, sans-serif',
    },
  });

  return (
    <ThemeProvider theme={theme}>
      <Router>
        <Navbar />
        <Routes>
          <Route path='/' element={<Landing />} />
          <Route path='/favorites' element={<Favorites />} />
        </Routes>
      </Router>
    </ThemeProvider>
  );
}

export default App;

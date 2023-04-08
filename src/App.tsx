import React from 'react';
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import './App.css';
import Favorites from './pages/Favorites';
import Landing from './pages/Landing';

function App() {
  return (
    <Router>
      <Routes>
        <Route path='/' element={<Landing />} />
        <Route path='/favorites' element={<Favorites />} />
      </Routes>
    </Router>
    // <div className="App">
    //   <h1>PokeFlix</h1>
    // </div>
  );
}

export default App;

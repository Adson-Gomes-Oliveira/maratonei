import React from 'react';
import {Routes, Route} from 'react-router-dom';
import ExploreMovies from './pages/ExploreMovies';
import Homepage from './pages/Homepage';

function App() {
  return (
    <Routes>
      <Route path='/' element={<Homepage />} />
      <Route path='/explore-movies' element={<ExploreMovies />} />
    </Routes>
  );
}

export default App;

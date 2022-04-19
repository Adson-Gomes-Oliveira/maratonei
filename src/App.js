import React from 'react';
import {Routes, Route} from 'react-router-dom';
import Homepage from './pages/Homepage';
import Movies from './pages/Movies';
import Series from './pages/Series';

function App() {
  return (
    <Routes>
      <Route path='/' element={<Homepage />} />
      <Route path='/movies' element={<Movies />} />
      <Route path='/series' element={<Series />} />
    </Routes>
  );
}

export default App;

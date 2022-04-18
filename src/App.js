import React from 'react';
import {Routes, Route} from 'react-router-dom';
import Homepage from './pages/Homepage';
import Movies from './pages/Movies';

function App() {
  return (
    <Routes>
      <Route path='/' element={<Homepage />} />
      <Route path='/movies' element={<Movies />} />
    </Routes>
  );
}

export default App;

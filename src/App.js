import React from 'react';
import {Routes, Route} from 'react-router-dom';
import Explore from './pages/Explore';
import Homepage from './pages/Homepage';

function App() {
  return (
    <Routes>
      <Route path='/' element={<Homepage />} />
      <Route path='/explore' element={<Explore />} />
    </Routes>
  );
}

export default App;

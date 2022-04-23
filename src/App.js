import React from 'react';
import {Routes, Route} from 'react-router-dom';
import CardDetails from './pages/CardDetails';
import Homepage from './pages/Homepage';
import Movies from './pages/Movies';
import Series from './pages/Series';
import Streamings from './pages/Streamings';
import StreamingsResults from './pages/StreamingsResults';

function App() {
  return (
    <Routes>
      <Route path="/" element={<Homepage />} />
      <Route path="/movies" element={<Movies />} />
      <Route path="/movies/:id" element={<CardDetails />} />
      <Route path="/series" element={<Series />} />
      <Route path="/series/:id" element={<h1>oi</h1>} />
      <Route path="/streamings" element={<Streamings />} />
      <Route path="/streamings/:id" element={<StreamingsResults />} />
      <Route path="*" element={<h1>oi</h1>} />
    </Routes>
  );
}

export default App;

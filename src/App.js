import React from 'react';
import {Routes, Route} from 'react-router-dom';
import MediaDetails from './pages/MediaDetails';
import Homepage from './pages/Homepage';
import Login from './pages/Login';
import Media from './pages/Media';
import Providers from './pages/Providers';
import StreamingsResults from './pages/StreamingsResults';

function App() {
  return (
    <Routes>
      <Route path="/" element={<Homepage />} />
      <Route path="/movies" element={<Media />} />
      <Route path="/series" element={<Media />} />
      <Route path="/movies/:id" element={<MediaDetails />} />
      <Route path="/series/:id" element={<h1>oi</h1>} />
      <Route path="/streamings" element={<Providers />} />
      <Route path="/streamings/:id" element={<StreamingsResults />} />
      <Route path="/sign-in" element={<Login />} />
      <Route path="*" element={<h1>oi</h1>} />
    </Routes>
  );
}

export default App;

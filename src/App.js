import React from 'react';
import {Routes, Route} from 'react-router-dom';
import MediaDetails from './pages/MediaDetails';
import Homepage from './pages/Homepage';
import SignIn from './pages/SignIn';
import Media from './pages/Media';
import Providers from './pages/Providers';
import ProviderResults from './pages/ProviderResults';

function App() {
  return (
    <Routes>
      <Route path="/" element={<Homepage />} />
      <Route path="/movies" element={<Media />} />
      <Route path="/series" element={<Media />} />
      <Route path="/movies/:id" element={<MediaDetails />} />
      <Route path="/series/:id" element={<h1>oi</h1>} />
      <Route path="/providers" element={<Providers />} />
      <Route path="/providers/:id" element={<ProviderResults />} />
      <Route path="/sign-in" element={<SignIn />} />
      <Route path="*" element={<h1>oi</h1>} />
    </Routes>
  );
}

export default App;

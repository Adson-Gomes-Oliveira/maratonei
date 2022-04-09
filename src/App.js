import React from 'react';
import {Router, Route} from 'react-router-dom';

function App() {
  return (
    <Router>
      <Route path='/' element={(
        <>
          <Header />
          <Homepage />
        </>
      )} />
    </Router>
  );
}

export default App;

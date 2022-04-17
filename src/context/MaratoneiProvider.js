import React, {useState} from 'react';
import PropTypes from 'prop-types';
import MaratoneiContext from './MaratoneiContext';
import topPopularity from '../services/popularityTMDbAPI';

function MaratoneiProvider({children}) {
  const [popularMovies, setPopularMovies] = useState([]);

  const fetchMoviesByPopularity = async () => {
    const moviesData = await topPopularity();
    setPopularMovies(moviesData);
  };

  return (
    <MaratoneiContext.Provider value={ {
      popularMovies,
      fetchMoviesByPopularity,
    } }>
      {children}
    </MaratoneiContext.Provider>
  );
}

MaratoneiProvider.propTypes = {
  children: PropTypes.node,
};

export default MaratoneiProvider;

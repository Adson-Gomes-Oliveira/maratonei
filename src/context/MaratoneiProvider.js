import React, {useState} from 'react';
import PropTypes from 'prop-types';
import MaratoneiContext from './MaratoneiContext';
import moviesByPopularity from '../services/moviesByPopularityAPI';

function MaratoneiProvider({children}) {
  const [popularMovies, setPopularMovies] = useState([]);
  const [loading, setLoading] = useState(false);

  const fetchMoviesByPopularity = async (page) => {
    setLoading(true);

    const moviesData = await moviesByPopularity(page);
    setPopularMovies(moviesData);

    setLoading(false);
  };

  return (
    <MaratoneiContext.Provider value={ {
      popularMovies,
      fetchMoviesByPopularity,
      loading,
    } }>
      {children}
    </MaratoneiContext.Provider>
  );
}

MaratoneiProvider.propTypes = {
  children: PropTypes.node,
};

export default MaratoneiProvider;

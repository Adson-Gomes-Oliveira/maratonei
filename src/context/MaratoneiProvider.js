import React, {useState} from 'react';
import PropTypes from 'prop-types';
import MaratoneiContext from './MaratoneiContext';
import moviesByPopularity from '../services/moviesByPopularityAPI';
import queryMovieSeries from '../services/queryMovieSeriesAPI';

function MaratoneiProvider({children}) {
  const [popularMovies, setPopularMovies] = useState([]);
  const [loading, setLoading] = useState(false);
  const [inputSearch, setInputSearch] = useState('');

  const fetchMoviesByPopularity = async () => {
    setLoading(true);

    const moviesData = await moviesByPopularity();
    setPopularMovies(moviesData);

    setLoading(false);
  };

  const handleChangeSearch = ({target}) => {
    const {value} = target;
    setInputSearch(value);
  };

  const handleEnterSearch = async (event) => {
    if (event.key === 'Enter') {
      event.preventDefault();

      if (inputSearch === '') {
        fetchMoviesByPopularity();
      }

      const query = inputSearch.replace(/ /g, '+');
      const queryData = await queryMovieSeries(query);

      setPopularMovies(queryData);
    }
  };

  const handleClickSearch = async () => {
    if (inputSearch === '') {
      fetchMoviesByPopularity();
    }

    const query = inputSearch.replace(/ /g, '+');
    const queryData = await queryMovieSeries(query);

    setPopularMovies(queryData);
  };

  return (
    <MaratoneiContext.Provider value={ {
      popularMovies,
      fetchMoviesByPopularity,
      loading,
      inputSearch,
      setInputSearch,
      handleChangeSearch,
      handleClickSearch,
      handleEnterSearch,
    } }>
      {children}
    </MaratoneiContext.Provider>
  );
}

MaratoneiProvider.propTypes = {
  children: PropTypes.node,
};

export default MaratoneiProvider;

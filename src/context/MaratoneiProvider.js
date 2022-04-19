import React, {useState} from 'react';
import PropTypes from 'prop-types';
import MaratoneiContext from './MaratoneiContext';
import moviesByPopularity from '../services/moviesByPopularityAPI';
import queryMovieSeries from '../services/queryMovieSeriesAPI';

function MaratoneiProvider({children}) {
  const [moviesAndSeriesData, setmoviesAndSeriesData] = useState([]);
  const [loading, setLoading] = useState(false);
  const [filter, setFilter] = useState({
    inputSearchFilter: '',
    yearSearchFilter: '',
  });

  const fetchMovies = async () => {
    setLoading(true);

    const moviesData = await moviesByPopularity();
    setmoviesAndSeriesData(moviesData);

    setLoading(false);
  };

  const removeFilters = () => {
    setFilter((prev) => ({
      inputSearchFilter: '',
      yearSearchFilter: '',
    }));

    return fetchMovies();
  };

  const handleChangeSearch = ({target}) => {
    const {name, value} = target;
    setFilter((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleEnterSearch = async (event) => {
    if (event.key === 'Enter') {
      event.preventDefault();

      if (filter.inputSearchFilter === '' && filter.yearSearchFilter === '') {
        return fetchMovies();
      }

      const query = filter.inputSearchFilter.replace(/ /g, '+');
      const year = filter.yearSearchFilter;

      const queryData = await queryMovieSeries(query, year);

      setmoviesAndSeriesData(queryData);
    }
  };

  const handleClickSearch = async () => {
    if (filter.inputSearchFilter === '') return fetchMovies();

    const query = filter.inputSearchFilter.replace(/ /g, '+');
    const year = filter.yearSearchFilter;

    const queryData = await queryMovieSeries(query, year);

    return setmoviesAndSeriesData(queryData);
  };

  return (
    <MaratoneiContext.Provider value={ {
      moviesAndSeriesData,
      fetchMovies,
      loading,
      filter,
      handleChangeSearch,
      handleClickSearch,
      handleEnterSearch,
      removeFilters,
    } }>
      {children}
    </MaratoneiContext.Provider>
  );
}

MaratoneiProvider.propTypes = {
  children: PropTypes.node,
};

export default MaratoneiProvider;

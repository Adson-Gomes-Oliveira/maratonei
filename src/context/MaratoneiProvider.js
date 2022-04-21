import React, {useState, useEffect} from 'react';
import PropTypes from 'prop-types';
import MaratoneiContext from './MaratoneiContext';
import moviesByPopularity from '../services/moviesByPopularityAPI';
import seriesByPopularity from '../services/seriesByPopularityAPI';
import queryMovieSeries from '../services/queryMovieSeriesAPI';
import watchProviders from '../services/watchProvidersAPI';

function MaratoneiProvider({children}) {
  const [moviesAndSeriesData, setMoviesAndSeriesData] = useState([]);
  const [toggleFilter, setToggleFilter] = useState('stand-by-toggle');
  const [rotateWhenClick, setRotate] = useState('stand-by');
  const [providersData, setProvidersData] = useState([]);
  const [loading, setLoading] = useState(false);
  const [filter, setFilter] = useState({
    inputSearchFilter: '',
    yearSearchFilter: '',
  });

  const fetchProviders = async () => {
    const data = await watchProviders();
    setProvidersData(data);
  };

  useEffect(() => {
    fetchProviders();
  }, []);

  const fetchMovies = async () => {
    const moviesData = await moviesByPopularity();
    setMoviesAndSeriesData(moviesData);
  };

  const fetchSeries = async () => {
    const seriesData = await seriesByPopularity();
    return setMoviesAndSeriesData(seriesData);
  };

  const handleToggle = () => {
    if (rotateWhenClick === 'stand-by') setRotate('filterActivated');
    if (rotateWhenClick === 'filterActivated') setRotate('filterDeactivated');
    if (rotateWhenClick === 'filterDeactivated') setRotate('filterActivated');
    if (toggleFilter === 'stand-by-toggle') {
      return setToggleFilter('showFilter');
    }
    if (toggleFilter === 'hiddenFilter') return setToggleFilter('showFilter');
    return setToggleFilter('hiddenFilter');
  };

  const removeFilters = (actualPath) => {
    setFilter((prev) => ({
      inputSearchFilter: '',
      yearSearchFilter: '',
    }));

    handleToggle();
    if (actualPath === '/movies') return fetchMovies();
    if (actualPath === '/series') return fetchSeries();
  };

  const handleChangeSearch = ({target}) => {
    const {name, value} = target;
    setFilter((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleEnterSearch = async (event, actualPath) => {
    if (event.key === 'Enter') {
      event.preventDefault();

      if (filter.inputSearchFilter === '' && filter.yearSearchFilter === '') {
        if (actualPath === '/movies') return fetchMovies();
        if (actualPath === '/series') return fetchSeries();
      }

      const query = filter.inputSearchFilter.replace(/ /g, '+');
      const year = filter.yearSearchFilter;

      if (actualPath === '/movies') {
        const dataTarget = 'movies';
        const queryData = await queryMovieSeries(query, year, dataTarget);
        return setMoviesAndSeriesData(queryData);
      }

      if (actualPath === '/series') {
        const dataTarget = 'series';
        const queryData = await queryMovieSeries(query, year, dataTarget);
        return setMoviesAndSeriesData(queryData);
      }
    }
  };

  const handleClickSearch = async (actualPath) => {
    if (filter.inputSearchFilter === '') return fetchMovies();

    const query = filter.inputSearchFilter.replace(/ /g, '+');
    const year = filter.yearSearchFilter;

    if (actualPath === '/movies') {
      const dataTarget = 'movies';
      const queryData = await queryMovieSeries(query, year, dataTarget);
      return setMoviesAndSeriesData(queryData);
    }

    if (actualPath === '/series') {
      const dataTarget = 'series';
      const queryData = await queryMovieSeries(query, year, dataTarget);
      return setMoviesAndSeriesData(queryData);
    }
  };

  return (
    <MaratoneiContext.Provider value={ {
      moviesAndSeriesData,
      fetchMovies,
      fetchSeries,
      handleToggle,
      toggleFilter,
      providersData,
      rotateWhenClick,
      loading,
      filter,
      handleChangeSearch,
      handleClickSearch,
      handleEnterSearch,
      removeFilters,
      setLoading,
    } }>
      {children}
    </MaratoneiContext.Provider>
  );
}

MaratoneiProvider.propTypes = {
  children: PropTypes.node,
};

export default MaratoneiProvider;

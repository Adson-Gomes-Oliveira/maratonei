import React, {useState, useEffect} from 'react';
import PropTypes from 'prop-types';
import MaratoneiContext from './MaratoneiContext';
import moviesByPopularity from '../services/moviesByPopularityAPI';
import seriesByPopularity from '../services/seriesByPopularityAPI';
import queryMovieSeries from '../services/queryMovieSeriesAPI';
import watchProviders from '../services/watchProvidersAPI';
import moviesByProvider from '../services/moviesByProviderAPI';
import movieDetails from '../services/movieDetailsAPI';
import castAndCrew from '../services/castAndCrewAPI';
import movieReviews from '../services/movieReviewsAPI';

function MaratoneiProvider({children}) {
  const [moviesAndSeriesData, setMoviesAndSeriesData] = useState([]);
  const [moviesAndSeriesDetails, setMoviesAndSeriesDetails] = useState({
    genres: [],
    release_date: '00-00-0000',
    trailer_key: {},
    production_companies: [],
    recomendations: [],
    providers: {
      buy: [],
      flatrate: [],
      rent: [],
    },
  });
  const [castAndCrewData, setCastAndCrewData] = useState([]);
  const [reviews, setReviews] = useState([]);
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

  const fetchByProvider = async (providerId) => {
    const data = await moviesByProvider(providerId);
    setMoviesAndSeriesData(data);
  };

  useEffect(() => {
    fetchProviders();
  }, []);

  const fetchReviews = async (movieId) => {
    const data = await movieReviews(movieId);

    return setReviews(data);
  };

  const fetchCastAndCrew = async (movieId) => {
    const data = await castAndCrew(movieId);

    setCastAndCrewData(data);
  };

  const fetchDetails = async (movieId) => {
    const data = await movieDetails(movieId);
    setMoviesAndSeriesDetails(data);
  };

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

      switch (actualPath) {
        case '/movies':
          const dataMovies = 'movies';
          const queryDataMovies = await
          queryMovieSeries(query, year, dataMovies);
          return setMoviesAndSeriesData(queryDataMovies);

        case '/series':
          const dataSeries = 'series';
          const queryDataSeries = await
          queryMovieSeries(query, year, dataSeries);
          return setMoviesAndSeriesData(queryDataSeries);
        default:
          break;
      }
    }
  };

  const handleClickSearch = async (actualPath) => {
    if (filter.inputSearchFilter === '') {
      if (actualPath === '/movies') return fetchMovies();
      if (actualPath === '/series') return fetchSeries();
    }

    const query = filter.inputSearchFilter.replace(/ /g, '+');
    const year = filter.yearSearchFilter;

    switch (actualPath) {
      case '/movies':
        const dataMovies = 'movies';
        const queryDataMovies = await
        queryMovieSeries(query, year, dataMovies);
        return setMoviesAndSeriesData(queryDataMovies);

      case '/series':
        const dataSeries = 'series';
        const queryDataSeries = await
        queryMovieSeries(query, year, dataSeries);
        return setMoviesAndSeriesData(queryDataSeries);
      default:
        break;
    }
  };

  return (
    <MaratoneiContext.Provider value={ {
      moviesAndSeriesData,
      moviesAndSeriesDetails,
      fetchMovies,
      fetchSeries,
      fetchCastAndCrew,
      fetchReviews,
      handleToggle,
      fetchDetails,
      reviews,
      toggleFilter,
      providersData,
      rotateWhenClick,
      loading,
      filter,
      handleChangeSearch,
      handleClickSearch,
      handleEnterSearch,
      fetchByProvider,
      removeFilters,
      setLoading,
      castAndCrewData,
    } }>
      {children}
    </MaratoneiContext.Provider>
  );
}

MaratoneiProvider.propTypes = {
  children: PropTypes.node,
};

export default MaratoneiProvider;

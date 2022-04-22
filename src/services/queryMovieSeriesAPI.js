import {TMDB_API_KEY} from '../data';

let requestResult = [];

async function filterQueryByAllFilters(query, year, dataTarget) {
  if (dataTarget === 'movies') {
    try {
      const requestMovieSeries = await fetch(`https://api.themoviedb.org/3/search/movie?api_key=${TMDB_API_KEY}&query=${query}&language=pt-BR&year=${year}&include_adult=false&include_video=false&page=1&sort_by=popularity.desc&with_watch_monetization_types=flatrate`)
          .then((response) => response.json())
          .then((response) => response.results);

      requestResult = requestMovieSeries;
    } catch (error) {
      console.log(error);
    }
  }
  if (dataTarget === 'series') {
    try {
      const requestMovieSeries = await fetch(`https://api.themoviedb.org/3/search/tv?api_key=${TMDB_API_KEY}&query=${query}&language=pt-BR&first_air_date_year=${year}&timezone=America%2FSao_Paulo&sort_by=popularity.desc&include_null_first_air_dates=false&with_watch_monetization_types=flatrate&with_status=0&with_type=0`)
          .then((response) => response.json())
          .then((response) => response.results);

      requestResult = requestMovieSeries;
    } catch (error) {
      console.log(error);
    }
  }

  const queryResult = requestResult
      .filter((query) => query.poster_path !== null);

  return queryResult;
}

async function filterQueryByYear(year, dataTarget) {
  if (dataTarget === 'movies') {
    try {
      const requestMovieSeries = await fetch(`https://api.themoviedb.org/3/discover/movie?api_key=${TMDB_API_KEY}&year=${year}&language=pt-BR&sort_by=popularity.desc&include_adult=false&include_video=false&page=1&with_watch_monetization_types=flatrate`)
          .then((response) => response.json())
          .then((response) => response.results);

      requestResult = requestMovieSeries;
    } catch (error) {
      console.log(error);
    }
  }

  if (dataTarget === 'series') {
    try {
      const requestMovieSeries = await fetch(`https://api.themoviedb.org/3/discover/tv?api_key=${TMDB_API_KEY}&first_air_date_year=${year}&language=pt-BR&sort_by=popularity.desc&page=1&timezone=America%2FSao_Paulo&include_null_first_air_dates=false&with_watch_monetization_types=flatrate&with_status=0&with_type=0`)
          .then((response) => response.json())
          .then((response) => response.results);
      console.log(requestMovieSeries);

      requestResult = requestMovieSeries;
    } catch (error) {
      console.log(error);
    }
  }

  const queryResult = requestResult
      .filter((query) => query.poster_path !== null);

  return queryResult;
}

async function queryMovieSeries(query, year, dataTarget) {
  switch (query) {
    case '':
      return filterQueryByYear(year, dataTarget);

    default:
      return filterQueryByAllFilters(query, year, dataTarget);
  }
};

export default queryMovieSeries;

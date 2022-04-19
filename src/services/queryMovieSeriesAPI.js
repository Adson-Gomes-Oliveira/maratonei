import {TMDB_API_KEY} from '../data';

async function queryMovieSeries(query, year, dataTarget) {
  let requestResult = [];

  if (dataTarget === 'movies') {
    const requestMovieSeries = await fetch(`https://api.themoviedb.org/3/search/movie?api_key=${TMDB_API_KEY}&query=${query}&language=pt-BR&year=${year}&include_adult=false&include_video=false&page=1&with_watch_monetization_types=flatrate`)
        .then((response) => response.json())
        .then((response) => response.results);

    requestResult = requestMovieSeries;
  }
  if (dataTarget === 'series') {
    const requestMovieSeries = await fetch(`https://api.themoviedb.org/3/search/tv?api_key=${TMDB_API_KEY}&query=${query}&language=pt-BR&year=${year}&timezone=America%2FSao_Paulo&include_null_first_air_dates=false&with_watch_monetization_types=flatrate&with_status=0&with_type=0`)
        .then((response) => response.json())
        .then((response) => response.results);

    requestResult = requestMovieSeries;
  }

  const queryResult = requestResult
      .filter((query) => query.poster_path !== null);

  queryResult.sort((a, b) => b.popularity - a.popularity);

  return queryResult;
};

export default queryMovieSeries;

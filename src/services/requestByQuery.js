import {TMDB_API_KEY} from '../data';
import requestByPopularity from './requestByPopularity';

async function fetchMoviesByQuery(search, year) {
  if (search === '' && year === '') {
    const data = await requestByPopularity('/movies');
    return data;
  }

  if (search === '') {
    const requestByQuery = await fetch(`https://api.themoviedb.org/3/discover/movie?api_key=${TMDB_API_KEY}&language=pt-BR&sort_by=popularity.desc&include_adult=false&include_video=false&page=1&primary_release_year=${year}&with_watch_monetization_types=flatrate`)
        .then((response) => response.json())
        .then((response) => response.results);

    return requestByQuery;
  }

  const requestByQuery = await fetch(`https://api.themoviedb.org/3/search/movie?api_key=${TMDB_API_KEY}&query=${search}&language=pt-BR&primary_release_year=${year}&include_adult=false&include_video=false&page=1&sort_by=popularity.desc&with_watch_monetization_types=flatrate`)
      .then((response) => response.json())
      .then((response) => response.results);

  return requestByQuery;
}

async function fetchSeriesByQuery(search, year) {
  if (search === '' && year === '') {
    const data = requestByPopularity('/series');
    return data;
  }

  if (search === '') {
    const requestByQuery = await fetch(`https://api.themoviedb.org/3/discover/tv?api_key=${TMDB_API_KEY}&language=pt-BR&sort_by=popularity.desc&include_adult=false&include_video=false&page=1&first_air_date_year=${year}&with_watch_monetization_types=flatrate`)
        .then((response) => response.json())
        .then((response) => response.results);

    return requestByQuery;
  }

  const requestByQuery = await fetch(`https://api.themoviedb.org/3/search/tv?api_key=${TMDB_API_KEY}&query=${search}&language=pt-BR&first_air_date_year=${year}&timezone=America%2FSao_Paulo&sort_by=popularity.desc&include_null_first_air_dates=false&with_watch_monetization_types=flatrate&with_status=0&with_type=0`)
      .then((response) => response.json())
      .then((response) => response.results);

  return requestByQuery;
}

function requestByQuery(path, search, year) {
  switch (path) {
    case '/movies':
      return fetchMoviesByQuery(search, year);
    case '/series':
      return fetchSeriesByQuery(search, year);
    default:
      return [];
  }
}

export default requestByQuery;

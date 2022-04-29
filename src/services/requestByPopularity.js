import {TMDB_API_KEY} from '../data/index';

async function fetchMovies() {
  try {
    const firstRequestByPopularity = await fetch(`https://api.themoviedb.org/3/discover/movie?api_key=${TMDB_API_KEY}&language=pt-BR&sort_by=popularity.desc&include_adult=false&include_video=false&page=1&with_watch_monetization_types=flatrate`)
        .then((response) => response.json())
        .then((response) => response.results);

    const secondRequestByPopularity = await fetch(`https://api.themoviedb.org/3/discover/movie?api_key=${TMDB_API_KEY}&language=pt-BR&sort_by=popularity.desc&include_adult=false&include_video=false&page=2&with_watch_monetization_types=flatrate`)
        .then((response) => response.json())
        .then((response) => response.results);


    const requestByPopularity = firstRequestByPopularity
        .concat(secondRequestByPopularity)
        .filter((movie) => movie.poster_path !== null);
    return requestByPopularity;
  } catch (error) {
    console.log(error);
  }
}

async function fetchSeries() {
  const firstRequestByPopularity = await fetch(`https://api.themoviedb.org/3/discover/tv?api_key=${TMDB_API_KEY}&language=pt-BR&sort_by=popularity.desc&page=1&timezone=America%2FSao_Paulo&include_null_first_air_dates=false&with_watch_monetization_types=flatrate&with_status=0&with_type=0`)
      .then((response) => response.json())
      .then((response) => response.results);

  const secondRequestByPopularity = await fetch(`https://api.themoviedb.org/3/discover/tv?api_key=${TMDB_API_KEY}&language=pt-BR&sort_by=popularity.desc&page=2&timezone=America%2FSao_Paulo&include_null_first_air_dates=false&with_watch_monetization_types=flatrate&with_status=0&with_type=0`)
      .then((response) => response.json())
      .then((response) => response.results);


  const requestByPopularity = firstRequestByPopularity
      .concat(secondRequestByPopularity)
      .filter((movie) => movie.poster_path !== null);
  return requestByPopularity;
}

function requestByPopularity(path) {
  switch (path) {
    case '/movies':
      return fetchMovies();
    case '/series':
      return fetchSeries();
    default:
      return [];
  }
};

export default requestByPopularity;

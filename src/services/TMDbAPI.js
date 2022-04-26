import {TMDB_API_KEY} from '../data/index';

const REQUEST_MOVIES = `https://api.themoviedb.org/3/discover/movie?api_key=${TMDB_API_KEY}&language=pt-BR&sort_by=popularity.desc&include_adult=false&include_video=false&page=1&with_watch_monetization_types=flatrate`;
const REQUEST_TV_SHOWS = `https://api.themoviedb.org/3/discover/tv?api_key=${TMDB_API_KEY}&language=pt-BR&sort_by=popularity.desc&page=1&timezone=America%2FSao_Paulo&include_null_first_air_dates=false&with_watch_monetization_types=flatrate&with_status=0&with_type=0`;

async function requestTMDb(type) {
  try {
    const requestData = type === '/movies' ?
    await fetch(REQUEST_MOVIES) : await fetch(REQUEST_TV_SHOWS);

    const requestResults = await requestData.json()
        .then((response) => response.results);

    return requestResults;
  } catch (error) {
    console.log(error);
  }
}

export default requestTMDb;

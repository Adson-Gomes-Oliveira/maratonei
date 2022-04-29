import {TMDB_API_KEY} from '../data/index';

async function requestByProvider(providerId) {
  try {
    const requestMoviesByProvider = await fetch(`https://api.themoviedb.org/3/discover/movie?api_key=${TMDB_API_KEY}&language=pt-BR&sort_by=popularity.desc&include_adult=false&include_video=false&page=1&with_watch_providers=${providerId}&watch_region=BR&with_watch_monetization_types=flatrate`)
        .then((response) => response.json())
        .then((response) => response.results);

    const moviesAByProviderFiltered = requestMoviesByProvider
        .filter((movie) => movie.poster_path !== null);

    return moviesAByProviderFiltered;
  } catch (error) {
    console.log(error);
  }
}

export default requestByProvider;

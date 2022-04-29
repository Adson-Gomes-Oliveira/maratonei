import {TMDB_API_KEY} from '../data/index';

async function requestProviders() {
  try {
    const requestProviders = await fetch(`https://api.themoviedb.org/3/watch/providers/movie?api_key=${TMDB_API_KEY}&language=pt-BR&watch_region=BR`)
        .then((response) => response.json())
        .then((response) => response.results);

    return requestProviders;
  } catch (error) {
    console.log(error);
  }
}

export default requestProviders;

import {TMDB_API_KEY} from '../data';

const DOUBLE_AMAZON = 119;
const DOUBLE_AMAZON_SECOND = 10;

async function watchProviders() {
  try {
    const requestProviders = await fetch(`https://api.themoviedb.org/3/watch/providers/movie?api_key=${TMDB_API_KEY}&language=pt-BR&watch_region=BR`)
        .then((response) => response.json())
        .then((response) => response.results);

    const noRepeatProvider = requestProviders
        .filter((provider) => provider.provider_id !== DOUBLE_AMAZON)
        .filter((provider) => provider.provider_id !== DOUBLE_AMAZON_SECOND);

    return noRepeatProvider;
  } catch (error) {
    console.log(error);
  }
}

export default watchProviders;
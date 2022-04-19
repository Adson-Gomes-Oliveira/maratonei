import {TMDB_API_KEY} from '../data/index';

export async function seriesByPopularity() {
  try {
    const firstRequestPopularity = await fetch(`https://api.themoviedb.org/3/discover/tv?api_key=${TMDB_API_KEY}&language=pt-BR&sort_by=popularity.desc&page=1&timezone=America%2FSao_Paulo&include_null_first_air_dates=false&with_watch_monetization_types=flatrate&with_status=0&with_type=0`)
        .then((response) => response.json())
        .then((response) => response.results);

    const secondRequestPopularity = await fetch(`https://api.themoviedb.org/3/discover/tv?api_key=${TMDB_API_KEY}&language=pt-BR&sort_by=popularity.desc&page=2&timezone=America%2FSao_Paulo&include_null_first_air_dates=false&with_watch_monetization_types=flatrate&with_status=0&with_type=0`)
        .then((response) => response.json())
        .then((response) => response.results);


    const seriesByPopularityFiltered = firstRequestPopularity
        .concat(secondRequestPopularity)
        .filter((movie) => movie.poster_path !== null);

    return seriesByPopularityFiltered;
  } catch (error) {
    console.log(error);
  }
};

export default seriesByPopularity;

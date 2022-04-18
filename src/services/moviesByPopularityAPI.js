import {TMDB_API_KEY} from '../data/index';

export async function moviesByPopularity() {
  try {
    const firstRequestPopularity = await fetch(`https://api.themoviedb.org/3/discover/movie?api_key=${TMDB_API_KEY}&language=pt-BR&sort_by=popularity.desc&include_adult=false&include_video=false&page=1&with_watch_monetization_types=flatrate`)
        .then((response) => response.json())
        .then((response) => response.results);

    const secondRequestPopularity = await fetch(`https://api.themoviedb.org/3/discover/movie?api_key=${TMDB_API_KEY}&language=pt-BR&sort_by=popularity.desc&include_adult=false&include_video=false&page=1&with_watch_monetization_types=flatrate`)
        .then((response) => response.json())
        .then((response) => response.results);


    const moviesByPopularityFiltered = firstRequestPopularity
        .concat(secondRequestPopularity)
        .filter((movie) => movie.poster_path !== null);
a

    return moviesByPopularityFiltered;
  } catch (error) {
    console.log(error);
  }
};

export default moviesByPopularity;

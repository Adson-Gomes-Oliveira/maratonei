import {TMDB_API_KEY} from '../data/index';

export async function topPopularity40() {
  try {
    const firstRequestPopularity = await fetch(`https://api.themoviedb.org/3/discover/movie?api_key=${TMDB_API_KEY}&language=pt-BR&sort_by=popularity.desc&include_adult=false&include_video=false&page=1&with_watch_monetization_types=flatrate`)
        .then((response) => response.json())
        .then((response) => response.results);

    const secondRequestPopularity = await fetch(`https://api.themoviedb.org/3/discover/movie?api_key=${TMDB_API_KEY}&language=pt-BR&sort_by=popularity.desc&include_adult=false&include_video=false&page=2&with_watch_monetization_types=flatrate`)
        .then((response) => response.json())
        .then((response) => response.results);

    const moviesByPopularity = firstRequestPopularity
        .concat(secondRequestPopularity);

    const requestTopPopularity = moviesByPopularity
        .filter((movie) => movie.poster_path !== null);

    return requestTopPopularity;
  } catch (error) {
    console.log(error);
  }
};

export async function topPopularity80() {
  try {
    const firstRequestPopularity = await fetch(`https://api.themoviedb.org/3/discover/movie?api_key=${TMDB_API_KEY}&language=pt-BR&sort_by=popularity.desc&include_adult=false&include_video=false&page=1&with_watch_monetization_types=flatrate`)
        .then((response) => response.json())
        .then((response) => response.results);

    const secondRequestPopularity = await fetch(`https://api.themoviedb.org/3/discover/movie?api_key=${TMDB_API_KEY}&language=pt-BR&sort_by=popularity.desc&include_adult=false&include_video=false&page=2&with_watch_monetization_types=flatrate`)
        .then((response) => response.json())
        .then((response) => response.results);

    const thirdRequestPopularity = await fetch(`https://api.themoviedb.org/3/discover/movie?api_key=${TMDB_API_KEY}&language=pt-BR&sort_by=popularity.desc&include_adult=false&include_video=false&page=2&with_watch_monetization_types=flatrate`)
        .then((response) => response.json())
        .then((response) => response.results);

    const fourthRequestPopularity = await fetch(`https://api.themoviedb.org/3/discover/movie?api_key=${TMDB_API_KEY}&language=pt-BR&sort_by=popularity.desc&include_adult=false&include_video=false&page=2&with_watch_monetization_types=flatrate`)
        .then((response) => response.json())
        .then((response) => response.results);

    const moviesByPopularity = firstRequestPopularity
        .concat(secondRequestPopularity)
        .concat(thirdRequestPopularity)
        .concat(fourthRequestPopularity);

    const requestTopPopularity = moviesByPopularity
        .filter((movie) => movie.poster_path !== null);

    return requestTopPopularity;
  } catch (error) {
    console.log(error);
  }
};

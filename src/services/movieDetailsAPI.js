import {TMDB_API_KEY} from '../data';

function movieDetails(movieId) {
  try {
    const requestMovieDetails = fetch(`https://api.themoviedb.org/3/movie/${movieId}?api_key=${TMDB_API_KEY}&language=pt-BR`)
        .then((response) => response.json());

    return requestMovieDetails;
  } catch (error) {
    console.log(error);
  }
}

export default movieDetails;

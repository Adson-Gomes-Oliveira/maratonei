import {TMDB_API_KEY} from '../data';

async function movieReviews(movieId) {
  try {
    const requestReviews = await fetch(`https://api.themoviedb.org/3/movie/${movieId}/reviews?api_key=${TMDB_API_KEY}&language=pt-BR&page=1`)
        .then((response) => response.json())
        .then((response) => response.results);

    return requestReviews;
  } catch (error) {
    console.log(error);
  }
}

export default movieReviews;

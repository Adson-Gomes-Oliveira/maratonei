import {TMDB_API_KEY} from '../data';

async function movieDetails(movieId) {
  try {
    const requestMovieDetails = await fetch(`https://api.themoviedb.org/3/movie/${movieId}?api_key=${TMDB_API_KEY}&language=pt-BR`)
        .then((response) => response.json());

    const requestTrailerVideo = await fetch(`https://api.themoviedb.org/3/movie/${movieId}/videos?api_key=${TMDB_API_KEY}&language=pt-BR`)
        .then((response) => response.json())
        .then((response) => response.results[0]);

    const requestRecomendations = await fetch(`https://api.themoviedb.org/3/movie/${movieId}/recommendations?api_key=${TMDB_API_KEY}&language=pt-BR&page=1`)
        .then((response) => response.json())
        .then((response) => response.results);

    const requestProviders = await fetch(`https://api.themoviedb.org/3/movie/${movieId}/watch/providers?api_key=${TMDB_API_KEY}`)
        .then((response) => response.json())
        .then((response) => response.results.BR);

    requestMovieDetails['trailer_key'] = requestTrailerVideo;
    requestMovieDetails['recomendations'] = requestRecomendations.slice(0, 4);
    requestMovieDetails['providers'] = requestProviders;
    requestMovieDetails.production_companies = requestMovieDetails
        .production_companies.filter((comp) => comp.logo_path !== null);

    return requestMovieDetails;
  } catch (error) {
    console.log(error);
  }
}

export default movieDetails;

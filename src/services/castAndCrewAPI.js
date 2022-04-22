import {TMDB_API_KEY} from '../data';

async function castAndCrew(movieId) {
  try {
    const requestCastAndCrew = await fetch(`https://api.themoviedb.org/3/movie/${movieId}/credits?api_key=${TMDB_API_KEY}&language=pt-BR`)
        .then((response) => response.json());

    return requestCastAndCrew;
  } catch (error) {
    console.log(error);
  }
}

export default castAndCrew;

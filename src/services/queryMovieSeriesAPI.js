import {TMDB_API_KEY} from '../data';

async function queryMovieSeries(query) {
  const requestMovieSeries = await fetch(`https://api.themoviedb.org/3/search/movie?api_key=${TMDB_API_KEY}&query=${query}&language=pt-BR`)
      .then((response) => response.json())
      .then((response) => response.results);

  const queryResult = requestMovieSeries
      .filter((query) => query.poster_path !== null);
  console.log(queryResult);
  queryResult.sort((a, b) => b.popularity - a.popularity);

  return queryResult;
};

export default queryMovieSeries;

async function topPopularity() {
  try {
    const requestPopularity = await fetch(`https://api.themoviedb.org/3/discover/movie?api_key=db9c402babc1fd076e9e70dc34460d2a&language=pt-BR&sort_by=popularity.desc&include_adult=false&include_video=false&page=1&with_watch_monetization_types=flatrate`)
        .then((response) => response.json())
        .then((response) => response.results);

    const requestTopPopularity = requestPopularity
        .filter((movie) => movie.poster_path !== null);

    return requestTopPopularity;
  } catch (error) {
    console.log(error);
  }
};

export default topPopularity;

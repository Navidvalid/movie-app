import axios from 'axios';

export const loadMovies = () => async (dispatch) => {
  // FETCH AXIOS
  const movies = await axios.get(
    `https://api.themoviedb.org/3/discover/movie?sort_by=popularity.desc&api_key=${process.env.REACT_APP_MOVIE_API}&page=1`
  );

  dispatch({
    type: 'GET_MOVIES',
    payload: {
      movies: movies.data.results,
    },
  });
};

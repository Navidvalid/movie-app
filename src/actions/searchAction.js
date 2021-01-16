import axios from 'axios';

export const loadSearch = (inputValue) => async (dispatch) => {
  // FETCH AXIOS
  const searchMovies = await axios.get(
    `https://api.themoviedb.org/3/search/movie?&api_key=04c35731a5ee918f014970082a0088b1&query=` +
      inputValue
  );

  dispatch({
    type: 'GET_SEARCH_MOVIES',
    payload: {
      search: searchMovies.data.results,
    },
  });
};

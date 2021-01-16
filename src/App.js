import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import styled from 'styled-components';
import { loadMovies } from './actions/moviesAction';
import GlobalStyles from './components/GlobalStyles';
import Movie from './components/Movie';
import Nav from './components/Nav';

function App() {
  const dispatch = useDispatch();

  //Fetch games
  useEffect(() => {
    dispatch(loadMovies());
  }, [dispatch]);

  //Pull data from state
  const { movies } = useSelector((state) => state.movies);
  const { search } = useSelector((state) => state.search);

  return (
    <div className='App'>
      <Nav />
      <MovieList>
        {search.length
          ? search.map((movie) => <Movie key={movie.id} movie={movie} />)
          : ''}
        {movies.map((movie) => (
          <Movie key={movie.id} movie={movie} />
        ))}
      </MovieList>
      <GlobalStyles />
    </div>
  );
}

export default App;

const MovieList = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-wrap: wrap;
  align-content: flex-start;
`;

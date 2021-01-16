import React from 'react';
import styled from 'styled-components';

const imgPath = 'https://image.tmdb.org/t/p/w1280';

function Movie({ movie }) {
  return (
    <Styledmovie>
      <img src={imgPath + movie.poster_path} alt={movie.title} />
      <div className='overView'>
        <h3>Overview:</h3>
        <p>{movie.overview}</p>
      </div>
      <div className='movieInfo'>
        <p>{movie.title}</p>
        <span>Release date: {movie.release_date}</span>
      </div>
    </Styledmovie>
  );
}

export default Movie;

const Styledmovie = styled.div`
  height: 550px;
  width: 300px;
  margin: 1rem 0.5rem;
  position: relative;
  overflow: hidden;
  background-color: white;
  border-radius: 7px;
  :hover .overView {
    transform: translateY(0%);
  }
  img {
    max-width: 100%;
    object-fit: cover;
  }
  .movieInfo {
    display: flex;
    align-items: center;
    flex-direction: column;
    padding: 0.5rem;
  }
  p {
    padding-bottom: 0.5rem;
  }

  .overView {
    background-color: #8b5e83;
    color: white;
    padding: 1rem;
    position: absolute;
    max-height: 100%;
    bottom: 0;
    left: 0;
    right: 0;
    transform: translateY(100%);
    transition: transform 0.3s ease-in-out;
  }
`;

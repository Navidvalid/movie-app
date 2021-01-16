import React, { useState } from 'react';
import styled from 'styled-components';
import { useDispatch } from 'react-redux';
import { loadSearch } from '../actions/searchAction';
import { AiFillHome } from 'react-icons/ai';

function Nav() {
  const dispatch = useDispatch();
  const [inputValue, setInputValue] = useState('');

  const inputHandler = (e) => {
    e.preventDefault();
    setInputValue(e.target.value);
  };

  const buttonHandler = (e) => {
    e.preventDefault();
    dispatch(loadSearch(inputValue));
  };

  const cleanSearchDataHandler = () => {
    dispatch({ type: 'GET_SEARCH_CLEAR' });
    setInputValue('');
  };

  return (
    <StyleNav>
      <div onClick={cleanSearchDataHandler} className='icon'>
        <AiFillHome />
      </div>

      <div className='searchInput'>
        <input onChange={inputHandler} placeholder='search...' type='text' />
        <button onClick={buttonHandler}>Search</button>
      </div>
    </StyleNav>
  );
}

export default Nav;

const StyleNav = styled.div`
  height: 9rem;
  width: 100%;
  display: flex;
  align-items: center;
  flex-direction: column;
  .icon {
    margin-top: 2rem;
    font-size: 2rem;
    cursor: pointer;
  }
  .searchInput {
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    margin-top: 1rem;
  }
  input {
    background-color: library;
    height: 2.5rem;
    width: 50%;
    border: none;
    outline: none;
    padding: 1rem;
    font-size: 1rem;
  }
  button {
    height: 2.5rem;
    width: 6rem;
    border: none;
    outline: none;
    font-size: 1rem;
    cursor: pointer;
  }
`;

import React from 'react';
import './Movies.css';

import SearchForm from '../SearchForm/SearchForm';
import MoviesCardList from '../MoviesCardList/MoviesCardList';

function Movies() {

  const [isClickedSave, setisClickedSave] = React.useState(false);

  function clickSaveButton() {
    isClickedSave ?
    setisClickedSave(false) :
    setisClickedSave(true)
  };

  return (
    <main className="movie">
      <SearchForm />
      <MoviesCardList onclickSaveButton={clickSaveButton} isClickedSave={isClickedSave} />
    </main>
  )
};

export default Movies;
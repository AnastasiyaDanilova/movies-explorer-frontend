
import React from 'react';
import './SavedMovies.css';

import SearchForm from '../SearchForm/SearchForm';
import MoviesCardList from '../MoviesCardList/MoviesCardList';

function SavedMovies() {

  const [isClickedSave, setisClickedSave] = React.useState(false);

  function clickSaveButton() {
    isClickedSave ?
    setisClickedSave(false) :
    setisClickedSave(true)
  };

  return (
    <main className="saved-movies">
      <SearchForm />
      <MoviesCardList onclickSaveButton={clickSaveButton} isClickedSave={isClickedSave} />
    </main>
  )
};

export default SavedMovies;
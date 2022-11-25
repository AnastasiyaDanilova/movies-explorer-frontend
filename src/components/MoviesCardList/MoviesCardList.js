import React from 'react';
import { Route } from 'react-router-dom';
import Preloader from '../Preloader/Preloader';
import MoviesCard from '../MoviesCard/MoviesCard';

import './MoviesCardList.css';

function MoviesCardList({ movies, moviesQuantity, handleLoadMore, saveMovies, savedMovies, isLoading, error, errorText, deleteMovieCard, submitButtonDisabled }) {

  return (
    <section className='movies'>
      {isLoading ? <Preloader /> : error ?
        <p className='movie-list__error'>{errorText}</p> : <>
          <ul className='movies__list'>
            {movies.slice(0, moviesQuantity).map((movie) => {
              return <MoviesCard movie={movie} key={Math.random()} handleLoadMore={handleLoadMore}
                saveMovies={saveMovies} savedMovies={savedMovies} deleteMovieCard={deleteMovieCard} submitButtonDisabled={submitButtonDisabled} />
            })}
          </ul>
          <Route path="/movies">
            {moviesQuantity < movies.length &&
              <button className='movies__more-button' type='button' onClick={handleLoadMore}>Ещё</button>
            }
          </Route>
        </>}
    </section>
  )
};

export default MoviesCardList;
import React, { useContext, useEffect, useState } from 'react';
import { Route, useLocation } from 'react-router-dom';
import Preloader from '../Preloader/Preloader';

import './MoviesCardList.css';

import MoviesCard from '../MoviesCard/MoviesCard';

function MoviesCardList({ movies, moviesQuantity, handleLoadMore, saveMovies, savedMovies, isLoading, error, errorText, deleteMovieCard }) {



  return (
    <section className='movies'>
      {isLoading ? <Preloader /> : error ?
        <p className='movie-list__error'>{errorText}</p> : <>
          <ul className='movies__list'>
            {movies.slice(0, moviesQuantity).map((movie) => {
              return <MoviesCard movie={movie} key={movie.id || movie.movieId} handleLoadMore={handleLoadMore}
                saveMovies={saveMovies} savedMovies={savedMovies} deleteMovieCard={deleteMovieCard} />
            })}
          </ul>
          <Route path="/movies">
            {moviesQuantity < movies.length &&
              <button className='button movies__more-button' type='button' onClick={handleLoadMore}>Ещё</button>
            }
          </Route>
        </>}
    </section>
  )
};

export default MoviesCardList;
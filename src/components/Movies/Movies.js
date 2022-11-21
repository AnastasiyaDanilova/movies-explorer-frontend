import React, { useContext, useEffect, useState } from 'react';

import './Movies.css';

import SearchForm from '../SearchForm/SearchForm';
import MoviesCardList from '../MoviesCardList/MoviesCardList';
import { getMovies } from '../../utils/MoviesApi';
import { saveMovie } from '../../utils/MainApi';
import { firstMoviesQuantity, moreFilmsQuantity } from '../../utils/const'
import {moviesFilter} from '../../utils/moviesFilter'


function Movies({ savedMovies, setSavedMovies, setPopupError, deleteMovieCard}) {
  const moviesInLocal = JSON.parse(localStorage.getItem('allMovies'));
  const [movies, setMovies] = React.useState([]);
  const [error, setError] = React.useState(false);
  const [errorText, setErrorText] = React.useState('');
  const [isLoading, setIsLoading] = React.useState(false);
  const [film, setFilm] = React.useState(getSearchStoreValue());
  const [allMovies, setAllMovies] = React.useState(JSON.parse(localStorage.getItem('allMovies')) || []);
  const [width, setWidth] = React.useState(window.innerWidth);
  const [moviesQuantity, setMoviesQuantity] = React.useState(firstMoviesQuantity(width))
  const [checkShorts, setCheckShorts] = React.useState(JSON.parse(localStorage.getItem('checkBox')) || false);

  function saveMovies(movies) {
    saveMovie(movies.country,
      movies.director,
      movies.duration,
      movies.year,
      movies.description,
      movies.image,
      movies.trailerLink,
      movies.nameRU,
      movies.nameEN,
      movies.thumbnail,
      movies.movieId)
      .then((res) => {
        setSavedMovies([res, ...savedMovies])
      })
      .catch((err) => setPopupError(true))
  }

  useEffect(() => {
    setError(false)
    const moviesToDisplay = moviesFilter(allMovies, film, checkShorts)
    localStorage.setItem('filteredMovies', JSON.stringify(moviesToDisplay))
    localStorage.setItem('checkBox', checkShorts);
    const filteredMoviesInLocal = JSON.parse(localStorage.getItem('filteredMovies')) || [];

    setMovies(filteredMoviesInLocal);
    if (filteredMoviesInLocal.length === 0 && film.length > 0) {
        setIsLoading(false);
        setErrorText('Ничего не найдено');
        return setError(true);
    }
}, [allMovies, checkShorts])

  useEffect(() => {
    function handleWindowSize() {
      setWidth(window.innerWidth);
    }
    window.addEventListener('resize', handleWindowSize)
    return () => window.removeEventListener('resize', handleWindowSize)
  }, [width])

  function handleFilmSearch(e) {
    e.preventDefault();
    setError(false);
    setIsLoading(true);

    if (film === '') {
      setIsLoading(false);
      setErrorText('Нужно ввести ключевое слово');
      return setError(true);
    }
    if (!moviesInLocal) {
      getMovies()
        .then((res) => {
          setIsLoading(false);
          localStorage.setItem('allMovies', JSON.stringify(res));
          setAllMovies(res);
          localStorage.setItem('filmSearch', film);
        })
        .catch(() => {
          setError(true);
          setErrorText('Во время запроса произошла ошибка. Возможно, проблема с соединением или сервер недоступен. Подождите немного и попробуйте ещё раз')
        })
        .finally(() => {
          setIsLoading(false)
        })
    }
    else {
      setAllMovies(moviesInLocal);
      setIsLoading(false);
      localStorage.setItem('filmSearch', film);
    }
  }

  function getSearchStoreValue() {
    const searchStoreValue = localStorage.getItem('filmSearch');
    if (!searchStoreValue) {
      return '';
    }
    return searchStoreValue;
  }
  function handleLoadMore() {
    return setMoviesQuantity((prevCount) => prevCount + moreFilmsQuantity(width))
  }
  function handleFilmChange(e) {
    setFilm(e.target.value)
  }

  function showShortMovies() {
    setCheckShorts(!checkShorts)
  }

  return (
    <main className="movie">
      <SearchForm handleFilmSearch={handleFilmSearch} handleFilmChange={handleFilmChange}
        film={film} showShortMovies={showShortMovies} checkShorts={checkShorts} />
      <MoviesCardList movies={movies} moviesQuantity={moviesQuantity} isLoading={isLoading} error={error}
        handleLoadMore={handleLoadMore} saveMovies={saveMovies} errorText={errorText} savedMovies={savedMovies} deleteMovieCard={deleteMovieCard}/>
    </main>
  )
};

export default Movies;
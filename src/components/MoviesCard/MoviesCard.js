import React from 'react';
import { Route, Switch, useLocation } from 'react-router-dom';

import './MoviesCard.css';

function MoviesCard({ movie, saveMovies, savedMovies, deleteMovieCard, submitButtonDisabled }) {

  const location = useLocation();

  const isSaved = movie.id ? savedMovies.map((i) => i.movieId).includes(movie.id) : location.pathname === '/saved-movies' ? true : '';

  function filmSave() {
    saveMovies({
      country: movie.country,
      director: movie.director,
      duration: movie.duration,
      year: movie.year,
      description: movie.description,
      image: `https://api.nomoreparties.co${movie.image.url}`,
      trailerLink: movie.trailerLink,
      nameRU: movie.nameRU,
      nameEN: movie.nameEN,
      thumbnail: `https://api.nomoreparties.co${movie.image.formats.thumbnail.url}`,
      movieId: movie.id,
    })
  }

  function deleteFilm() {
    if (location.pathname === '/saved-movies') {
      deleteMovieCard(movie)
    }
    if (location.pathname === '/movies')
      deleteMovieCard(savedMovies.find((i) => i.movieId === movie.id))
  }

  function getHoursAndMinutes(movieTime) {
    const minutes = movieTime % 60;
    const hours = Math.floor(movieTime / 60);

    if (hours === 0) {
      return `${movieTime} минут`
    }
    return `${hours}ч ${minutes}м`;
  }

  const hoursAndMinutes = getHoursAndMinutes(movie.duration)

  return (
    <li className='movieCard'>
      <Switch>

        <Route path="/movies">
          <button className={!isSaved ? 'movieCard__save-button' : 'movieCard__save-button_saved'}
            type='button' onClick={isSaved ? deleteFilm : filmSave} disabled={submitButtonDisabled} >{!isSaved ? `Coxpанить` : ''}</button>
        </Route>

        <Route path="/saved-movies">
          <button className='movieCard__delete-button ' onClick={deleteFilm} type='button' disabled={submitButtonDisabled}></button>
        </Route>

      </Switch>
      <a href={movie.trailerLink} target="_blank" rel="noreferrer" className="movieCard__image">
        <img className='movieCard__image' src={location.pathname === '/saved-movies' ? `${movie.image}` : `https://api.nomoreparties.co${movie.image.url}`} alt='обложка фильма' ></img>

      </a>
      <div className='movieCard__container'>
        <p className='movieCard__name'>{movie.nameRU}</p>
        <span className='movieCard__time'>{hoursAndMinutes}</span>
      </div>

    </li>
  )
};

export default MoviesCard;
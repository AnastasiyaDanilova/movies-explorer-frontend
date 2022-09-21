import { Route, Switch } from 'react-router-dom';
import './MoviesCard.css';

function MoviesCard({ movie, onclickSaveButton, isClickedSave }) {



  return (
    <li className='movieCard'>
      <Switch>

      <Route path="/movies">
        <button className={ !isClickedSave? 'button movieCard__save-button' : 'button movieCard__save-button_saved'} 
      onClick={onclickSaveButton}>{!isClickedSave ? `Coxpанить` : ''}</button>
      </Route>

      <Route path="/saved-movies">
        <button className='button movieCard__delete-button'></button>
      </Route>

      </Switch>
      <img className='movieCard__image' src={movie.image} alt='обложка фильма' ></img>
      <div className='movieCard__container'>
        <p className='movieCard__name'>{movie.name}</p>
        <span className='movieCard__time'>{movie.time}</span>
      </div>

    </li>
  )
};

export default MoviesCard;
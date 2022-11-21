import './SearchForm.css';

import Checkbox from '../Checkbox/Checkbox';

function SearchForm({ handleFilmSearch, handleFilmChange, film, showShortMovies, checkShorts }) {

  return (
    <section className='search-form'>
      <form className='search-form__container' onSubmit={handleFilmSearch}>

        <div className='search-form__input-container'>
          <input className='search-form__input' type='text' value={film || ''}
                        onChange={handleFilmChange} placeholder='Фильм' ></input>
          <button className='button search-form__button' type='submit'/>
        </div>

        <div className='search-form__checkbox-container'>
          <div className='search-form__checkbox-line'>
            <Checkbox showShortMovies={showShortMovies} checkShorts={checkShorts} />
            <p className='search-form__text'>Короткометражки</p>
          </div>
        </div>
      </form>
    </section>
  )
};

export default SearchForm;
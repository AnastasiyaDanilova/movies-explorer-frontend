import './SearchForm.css';

import Checkbox from '../Checkbox/Checkbox';

function SearchForm() {

  return (
    <section className='search-form'>
      <form className='search-form__container'>

        <div className='search-form__input-container'>
          <input className='search-form__input' placeholder='Фильм' required></input>
          <button className='button search-form__button' type='submit'/>
        </div>

        <div className='search-form__checkbox-container'>
          <div className='search-form__checkbox-line'>
            <Checkbox />
            <p className='search-form__text'>Короткометражки</p>
          </div>
        </div>
      </form>
    </section>
  )
};

export default SearchForm;
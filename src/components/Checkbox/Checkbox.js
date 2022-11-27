import './Checkbox.css';


function Checkbox({showShortMovies, checkShorts}) {

  return (  
      <label className='checkbox__label'>
        <input className='checkbox__input ' type='checkbox' value={checkShorts} defaultChecked={checkShorts} onChange={showShortMovies} />
        <div className='search-form__checkbox-div checkbox__div' />
      </label>
  )
};

export default Checkbox;
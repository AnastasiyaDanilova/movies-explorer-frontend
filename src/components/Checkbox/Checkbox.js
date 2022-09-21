import './Checkbox.css';


function Checkbox() {

  return (  
      <label className='checkbox__label'>
        <input className='checkbox__input ' type='checkbox' />
        <div className='search-form__checkbox-div checkbox__div' />
      </label>
  )
};

export default Checkbox;
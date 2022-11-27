import React from "react";
import LogoLink from '../LogoLink/LogoLink';
import { Link } from 'react-router-dom';

import './AuthForm.css';


function AuthForm({submitButtonDisabled, title, buttonText, children, handleSubmit, authText, authButtonText, authButtonTextPath, buttonClass, formError, errorText, disable}) {
  
  return (
    <div className="auth">
      <div className="auth-logo">
        <LogoLink />
      </div>

      <h1 className="auth__title">{title}</h1>

      <form className="auth__form" onSubmit={handleSubmit}>
        {children}
        <span className="form__submit-error-span" htmlFor='form-button' >{formError ? errorText : ''}</span>
        <button className={!submitButtonDisabled && !disable ? `auth__button ${buttonClass}` : `auth__button ${buttonClass} auth__button_disabled`} id='form-button' type="submit" disabled={disable} >{buttonText}</button>
      </form>
      <p className="auth__text">{authText} <Link className='auth__buttonText' to={`${authButtonTextPath}`}>{authButtonText}</Link></p>
    </div>
  )
}

export default AuthForm;
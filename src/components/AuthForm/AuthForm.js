import React from "react";
import LogoLink from '../LogoLink/LogoLink';
import { Link } from 'react-router-dom';

import './AuthForm.css';


function AuthForm({ title, buttonText, children, handleSubmit, authText, authButtonText, authButtonTextPath, buttonClass}) {
  return (
    <div className="auth">
      <div className="auth-logo">
        <LogoLink />
      </div>

      <h1 className="auth__title">{title}</h1>

      <form className="auth__form" onSubmit={handleSubmit}>
        {children}
        <button className={`button auth__button ${buttonClass}`}>{buttonText}</button>
      </form>
      <p className="auth__text">{authText} <Link className='auth__buttonText' to={`${authButtonTextPath}`}>{authButtonText}</Link></p>
    </div>
  )
}

export default AuthForm;
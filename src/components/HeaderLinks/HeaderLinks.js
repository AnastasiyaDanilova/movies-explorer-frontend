import React from 'react';

import { Link } from 'react-router-dom';

import './HeaderLinks.css';

function HeaderLinks({signupLink, signinLink}) {

  return (
    <div className='header-links'>
      <Link className= 'header-links__link' to={`${signupLink}`}>Регистрация</Link>
      <Link className='header-links__link header-links__link_login' to={`${signinLink}`}>Войти</Link>
    </div>
  )
};

export default HeaderLinks;
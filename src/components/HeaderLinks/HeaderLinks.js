import React from 'react';

import { Link } from 'react-router-dom';

import './HeaderLinks.css';

function HeaderLinks() {

  return (
    <div className='header-links'>
      <Link className= 'link header-links__link' to='/'>Регистрация</Link>
      <Link className='link header-links__link header-links__link_login' to="/">Войти</Link>
    </div>
  )
};

export default HeaderLinks;
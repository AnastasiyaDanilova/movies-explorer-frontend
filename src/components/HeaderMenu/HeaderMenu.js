import React from 'react'

import './HeaderMenu.css';
import { Link } from 'react-router-dom';
import closeIcon from '../../images/closeIcon.svg'

function HeaderMenu({ lendingLink, filmsLink, savedFilmsLink, accountLink, openMenu }) {


  return (
    <div>
      <button className='button burger-icon' />

      <div className='menu'>
        <div className='menu__link-container'>
          <img className='menu__close-icon' src={closeIcon} alt='крестик'></img>
          <div className='menu__links'>
            <Link className='menu__link menu__link_lending' to={`${lendingLink}`}>Главная</Link>
            <Link className='menu__link menu__link_films' to={`${filmsLink}`}>Фильмы</Link>
            <Link className='menu__link' to={`${savedFilmsLink}`}>Сохранённые фильмы</Link>
          </div>
          <Link className='menu__link menu__link_account' to={`${accountLink}`}>Аккаунт <div className='account-icon' /></Link>
        </div>
      </div>
      </div>
  )
};

export default HeaderMenu;
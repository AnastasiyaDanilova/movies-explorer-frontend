import React from 'react'

import './HeaderMenu.css';
import { Link } from 'react-router-dom';
import closeIcon from '../../images/closeIcon.svg'

function HeaderMenu({ lendingLink, filmsLink, savedFilmsLink, accountLink, menuOpen, onOpenMenu, onCloseMenu }) {


  return (
    <div>
      <button className='button burger-icon' type='button' onClick={onOpenMenu} />

      <div className={ menuOpen ? 'menu' : 'menu__close' }>
        <div className='menu__link-container'>
          <img className='menu__close-icon' src={closeIcon} alt='крестик' onClick={onCloseMenu} />
          <div className='menu__links'>
            <Link className='link menu__link menu__link_lending' to={`${lendingLink}`} onClick={onCloseMenu}>Главная</Link>
            <Link className='link menu__link menu__link_films' to={`${filmsLink}`} onClick={onCloseMenu}>Фильмы</Link>
            <Link className='link menu__link' to={`${savedFilmsLink}`} onClick={onCloseMenu}>Сохранённые фильмы</Link>
          </div>
          <Link className='link menu__link menu__link_account' to={`${accountLink}`} onClick={onCloseMenu}>Аккаунт <div className='account-icon' /></Link>
        </div>
      </div>
      </div>
  )
};

export default HeaderMenu;
import React from 'react'
import { useLocation } from 'react-router-dom';

import './HeaderMenu.css';
import { Link, NavLink } from 'react-router-dom';
import closeIcon from '../../images/closeIcon.svg'

function HeaderMenu({ lendingLink, filmsLink, savedFilmsLink, accountLink, menuOpen, onOpenMenu, onCloseMenu }) {

  let location = useLocation().pathname;
  console.log(location === '/movies')

  return (
    <div>
      <button className='button burger-icon' type='button' onClick={onOpenMenu} />

      <div className={menuOpen ? 'menu' : 'menu__close'}>
        <div className='menu__link-container'>
          <img className='menu__close-icon' src={closeIcon} alt='крестик' onClick={onCloseMenu} />
          <div className='menu__links'>
            <NavLink className={location === '/' ? 'link menu__link menu__link_lending menu__link_active' : 'link menu__link menu__link_lending'}
              to={`${lendingLink}`} onClick={onCloseMenu} >Главная</NavLink>
            <NavLink className={location === '/movies' ? 'link menu__link_active menu__link_films ' : 'link menu__link menu__link_films'}
              to={`${filmsLink}`} onClick={onCloseMenu} >Фильмы</NavLink>
            <NavLink className={location === '/saved-movies' ? 'link menu__link_active menu__link_saved-films' : 'link menu__link'} 
            to={`${savedFilmsLink}`} onClick={onCloseMenu} >Сохранённые фильмы</NavLink>
          </div>
          <Link className='link menu__link menu__link_account' to={`${accountLink}`} onClick={onCloseMenu}>Аккаунт <div className='account-icon' /></Link>
        </div>
      </div>
    </div>
  )
};

export default HeaderMenu;
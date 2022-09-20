import React from 'react'

import LogoLink from '../LogoLink/LogoLink';
import { Route } from 'react-router-dom';
import HeaderLinks from '../HeaderLinks/HeaderLinks';
import HeaderMenu from '../HeaderMenu/HeaderMenu';


import './Header.css';

function Header({ signupLink, signinLink, loggedIn, lendingLink, filmsLink, savedFilmsLink, accountLink, menuOpen, onOpenMenu, onCloseMenu }) {

  return (
    <Route path="/(|movies|saved-movies|profile)">
      <header className='header'>
        <LogoLink />
        {loggedIn ?
          <HeaderMenu lendingLink={`${lendingLink}`} filmsLink={`${filmsLink}`} savedFilmsLink={`${savedFilmsLink}`} 
          accountLink={`${accountLink}`} menuOpen={menuOpen} onOpenMenu={onOpenMenu} onCloseMenu={onCloseMenu} />
          :
          <HeaderLinks signupLink={`${signupLink}`} signinLink={`${signinLink}`} />
        }
      </header>
    </Route>

  )
};

export default Header;
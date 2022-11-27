import React from 'react'

import LogoLink from '../LogoLink/LogoLink';
import { Route} from 'react-router-dom';
import HeaderLinks from '../HeaderLinks/HeaderLinks';
import HeaderMenu from '../HeaderMenu/HeaderMenu';


import './Header.css';

function Header({ signupLink, signinLink, loggedIn, lendingLink, filmsLink, savedFilmsLink, accountLink}) {

  const [menuOpen, setMenuOpen] = React.useState(false);

  // открыть закрыть меню
  function openMenu() {
    setMenuOpen(true)
  }

  function closeMenu() {
    setMenuOpen(false)
  }

  return (
    <Route path="/(|movies|saved-movies|profile)">
      <header className='header'>
        <LogoLink />
        {loggedIn ?
          <HeaderMenu lendingLink={`${lendingLink}`} filmsLink={`${filmsLink}`} savedFilmsLink={`${savedFilmsLink}`} 
          accountLink={`${accountLink}`} menuOpen={menuOpen} onOpenMenu={openMenu} onCloseMenu={closeMenu} />
          :
          <HeaderLinks signupLink={`${signupLink}`} signinLink={`${signinLink}`} />
        }
      </header>
    </Route>

  )
};

export default Header;
import React from 'react'

import LogoLink from '../LogoLink/LogoLink';
import HeaderLinks from '../HeaderLinks/HeaderLinks';


import './Header.css';

function Header({signupLink, signinLink}) {

  return (
    <header className='header'>
      <LogoLink/>
      <HeaderLinks signupLink={`${signupLink}`} signinLink={`${signinLink}`}/>
    </header>
   
    )
};

export default Header;
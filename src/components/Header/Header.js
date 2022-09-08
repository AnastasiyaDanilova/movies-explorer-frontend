import React from 'react'

import LogoLink from '../LogoLink/LogoLink';
import HeaderLinks from '../HeaderLinks/HeaderLinks';


import './Header.css';

function Header() {

  return (
    <header className='header'>
      <LogoLink/>
      <HeaderLinks/>

    </header>
   
    )
};

export default Header;
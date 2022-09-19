import React from 'react';

import './LogoLink.css';

import {Link} from 'react-router-dom';

import logo from '../../images/logo.svg';


function LogoLink() {

  return (
    <Link to='/'>
      <img className='logo-link' src={logo} alt='Логотип'/>
    </Link>
    )
};

export default LogoLink;
import React from 'react';

import './NavTab.css';

function NavTab() {

  return (
      <nav className='nav-tab'>
        <a href='#about-project' className='link nav-tab__link'>О проекте</a>
        <a href='#technologies' className='link nav-tab__link'>Технологии</a>
        <a href='#student' className='link nav-tab__link'>Студент</a>
      </nav>
  )
};

export default NavTab;
import React from 'react'

import { Route } from 'react-router-dom';

import './Footer.css';


function Footer() {

  return (
    <Route exact path="/(|movies|saved-movies)">
      <footer className='footer'>
        <p className='footer-text'>Учебный проект Яндекс.Практикум х BeatFilm.</p>
        <hr className='line footer-line' />
        <div className='footer__links-container'>
          <div>
            <ul className='footer__links'>
              <li className='footer__link-li'>
                <a className='link footer__link' href='https://practicum.yandex.ru/' target='blank'>Яндекс.Практикум</a>
              </li>

              <li className='footer__link-li'>
                <a className='link footer__link' href='https://github.com/AnastasiyaDanilova' target='blank'>Github</a>
              </li>

              <li className='footer__link-li'>
                <a className='link footer__link' href='https://t.me/pressness' target='blank'>Telegram</a>
              </li>
            </ul>
          </div>
          <p className='footer__copy'>&copy; 2022</p>
        </div>
      </footer>
    </Route>
  )
};

export default Footer;
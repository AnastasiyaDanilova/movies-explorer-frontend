import React from 'react'

import './Footer.css';


function Footer() {

  return (
    <footer className='footer'>
      <p className='footer-text'>Учебный проект Яндекс.Практикум х BeatFilm.</p>
      <hr className='line footer-line' />
      <div className='footer__links-container'>
        <div>
          <ul className='footer__links'>
            <li className='footer__link-li'>
              <a className='footer__link' href='https://practicum.yandex.ru/' target='blank'>Яндекс.Практикум</a>
            </li>

            <li className='footer__link-li'>
              <a className='footer__link' href='https://github.com/AnastasiyaDanilova' target='blank'>Github</a>
            </li>

            <li className='footer__link-li'>
              <a className='footer__link' href='https://t.me/pressness' target='blank'>Telegram</a>
            </li>
          </ul>
        </div>
        <p className='footer__copy'>&copy; 2022</p>
      </div>
    </footer>
  )
};

export default Footer;
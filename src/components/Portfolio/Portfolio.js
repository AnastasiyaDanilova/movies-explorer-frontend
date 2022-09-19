import React from 'react';

import './Portfolio.css';

import arrow from '../../images/arrow.svg'


function Portfolio() {

  return (
    <section className='portfolio'>
      <h2 className='portfolio__title'>Портфолио</h2>
      <ul className='portfolio__container'>
        <li className='portfolio__link-li'>
          <a className='portfolio__link' href='https://github.com/AnastasiyaDanilova/how-to-learn' target='blank'>
            <p className='portfolio__site'>Статичный сайт</p>
            <img className='portfolio__image' src={arrow} alt='стрелка'></img>
          </a>
        </li>

        <li className='portfolio__link-li'>
          <a className='portfolio__link' href='https://github.com/AnastasiyaDanilova/russian-travel' target='blank'>
            <p className='portfolio__site'>Адаптивный сайт</p>
            <img className='portfolio__image' src={arrow} alt='стрелка'></img>
          </a>
        </li>

        <li className='portfolio__link-li'>
          <a className='portfolio__link' href='https://github.com/AnastasiyaDanilova/react-mesto-api-full' target='blank'>
            <p className='portfolio__site'>Одностраничное приложение</p>
            <img className='portfolio__image' src={arrow} alt='стрелка'></img>
          </a>
        </li>
      </ul>
    </section>
  )
};

export default Portfolio;
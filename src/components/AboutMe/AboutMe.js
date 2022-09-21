import React from 'react';

import './AboutMe.css';

import avatar from '../../images/avatar.jpg'


function AboutMe() {

  return (
    <section className='about-me' id='student'>
      <h2 className='about-me__title'>Студент</h2>
      <hr className='line' />
      <div className='about-me__container'>
        <img className='about-me__avatar' src={avatar} alt='аватар' />
        <div className='about-me__text-container'>
          <div>
            <h3 className='about-me__name'>Анастасия</h3>
            <p className='about-me__description'>Фронтенд-разработчик, 26 лет</p>
            <p className='about-me__text'>Родилась на Севере, живу на Урале. Недавно начала кодить, хочу стать настоящим разработчиком и создавать классные и удобные продукты для людей. Учусь играть на барабанах и лепить из глины, а еще у меня есть милая пушистая собака.</p>
          </div>
          <ul className='about-me__links'>
            <li className='about-me__link-li'>
              <a className='link about-me__link' href='https://t.me/pressness' target='blank'>Telegram</a>
            </li>
            <li className='about-me__link-li'>
              <a className='link about-me__link' href='https://github.com/AnastasiyaDanilova' target='blank'>Github</a>
            </li>
          </ul>
        </div>
      </div>
    </section>
  )
};

export default AboutMe;
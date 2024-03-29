import React from 'react';
import './Techs.css';

function Techs() {

  return (
    <section className='techs' id='technologies'>
      <h2 className='techs__title block-title'>Технологии</h2>
      <hr className='line techs__line' />
      <h3 className='techs__subtitle'>7 технологий</h3>
      <p className='techs__text'>На курсе веб-разработки мы освоили технологии, которые применили в дипломном проекте.</p>
<div>
      <ul className='techs__list'>
        <li className='techs__tech'>HTML</li>
        <li className='techs__tech'>CSS</li>
        <li className='techs__tech'>JS</li>
        <li className='techs__tech'>React</li>
        <li className='techs__tech'>Git</li>
        <li className='techs__tech'>Express.js</li>
        <li className='techs__tech'>mongoDB</li>
        
      </ul>
      </div>
    </section>
  )
};

export default Techs;
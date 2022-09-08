import React from 'react';

import './AboutProject.css';

function AboutProject() {

  return (
    <section className='about' id='about-project'>
      <h2 className='about__title block-title'>О проекте</h2>
      <hr className='line large_line' />
      <ul className='about__paragraphs'>
        <li className='about__paragraph'>
          <h3 className='block-title about__paragraph-title'>Дипломный проект включал 5&nbsp;этапов</h3>
          <p className='about__text'>Составление плана, работу над бэкендом, вёрстку, добавление функциональности и&nbsp;финальные доработки.</p>
        </li>

        <li className='about__paragraph'>
          <h3 className='block-title about__paragraph-title'>На&nbsp;выполнение диплома ушло 5&nbsp;недель</h3>
          <p className='about__text'>У&nbsp;каждого этапа был мягкий и&nbsp;жёсткий дедлайн, которые нужно было соблюдать, чтобы успешно защититься.</p>
        </li>
      </ul>

      <div className='chart'>
        <div className='chart__graph-container'>
          <p className='chart__graph chart__graph_one-week'>1 неделя</p>
          <p className='chart__graph chart__graph_four-week'>4 недели</p>
        </div>

        <div className='chart__graph-container'>
          <p className='chart__figcaption chart__figcaption_frontend'>Front-end</p>
          <p className='chart__figcaption'>Back-end</p>

        </div>
      </div>
    </section>
  )
};

export default AboutProject;
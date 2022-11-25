import React from 'react';
import { useHistory } from 'react-router';

import './NotFoundPage.css';


function NotFoundPage() {
const history = useHistory()

function goBackHistory () {
  history.goBack()
  history.goBack()
  history.goBack()
}

  return (
    <section className='notfound'>
      <div className='notfound__container'>
        <h2 className='notfound__title'>404</h2>
        <p className='notfound__text'>Страница не найдена</p>
      </div>
      <button className='button notfound__button' type='button' onClick={goBackHistory}>Назад</button>
    </section>
  )
};

export default NotFoundPage;
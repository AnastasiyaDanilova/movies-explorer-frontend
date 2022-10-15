import './NotFoundPage.css';

function NotFoundPage() {

  return (
    <section className='notfound'>
      <div className='notfound__container'>
        <h2 className='notfound__title'>404</h2>
        <p className='notfound__text'>Страница не найдена</p>
      </div>
      <button className='button notfound__button' type='button'>Назад</button>
    </section>
  )
};

export default NotFoundPage;
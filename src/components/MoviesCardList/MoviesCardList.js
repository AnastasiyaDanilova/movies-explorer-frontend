import './MoviesCardList.css';

import { cards } from '../../utils/const';
import MoviesCard from '../MoviesCard/MoviesCard';

function MoviesCardList( {onclickSaveButton, isClickedSave}) {

  return (
    <section className='movies'>
      <ul className='movies__list'>
        {cards.map((card) => {
          return <MoviesCard movie={card} key={card.id} onclickSaveButton={onclickSaveButton} isClickedSave={isClickedSave} />
        })}
      </ul>
      <button className='button movies__more-button'>Ещё</button>
    </section>
  )
};

export default MoviesCardList;
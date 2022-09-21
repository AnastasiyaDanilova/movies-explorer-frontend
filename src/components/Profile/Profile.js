
import './Profile.css';

function Profile() {

  return (
    <section className='profile'>
      <h2 className='profile__title'>Привет, Виталий!</h2>
      <form className='profile__form'>
        <div className='profile__container'>
          <div className='input-container input-container_name'>
            <label className='profile__label' for='profile-name'>Имя</label>
            <input className='profile__input profile__input_name' id='profile-name' placeholder='Имя' />
          </div>

          <div className='input-container input-container_email'>
            <label className='profile__label' for='profile-email'>E-mail</label>
            <input className='profile__input' id='profile-email' placeholder='E-mail' type='email' />
          </div>
        </div>

          <button className=' button profile__button'>Редактировать</button>
          <button className='button profile__button profile__button_out'>Выйти из аккаунта</button>
      </form>
    </section>
  )
};

export default Profile;
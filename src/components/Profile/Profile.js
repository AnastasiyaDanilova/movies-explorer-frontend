
import React, { useContext, useEffect, useState } from 'react';
import { CurrentUserContext } from '../../context/CurrentUserContext';
import useInput from '../../hooks/useInput';
import { EMAIL_VALID } from '../../utils/const';

import './Profile.css';

function Profile({ handleLogout, patchUserInfo, updateProfileText, setUpdateProfileText }) {
  const currentUser = useContext(CurrentUserContext)

  const [disable, setDisable] = useState(true)

  const { value: name, onChange: onChangeName, setValue: setNameValue, errorMessage: nameError } = useInput('')
  const { value: email, onChange: onChangeEmail, setValue: setEmailValue, errorMessage: emailError } = useInput('')

  useEffect(() => {
    setNameValue(currentUser.name)
    setEmailValue(currentUser.email)
  }, [currentUser, setNameValue, setEmailValue])

  useEffect(() => {
    if ((nameError === '' && emailError === '') && (name !== currentUser.name || email !== currentUser.email)) {
      setDisable(false)
    }
    else { setDisable(true) }
  }, [name, email, nameError, emailError, currentUser])

  function handlePatchInfo(e) {
    e.preventDefault()
    patchUserInfo(name, email)
  }

  return (
    <section className='profile'>
      <h2 className='profile__title'>Привет, {currentUser.name}!</h2>
      <form className='profile__form' onSubmit={handlePatchInfo} >
        <div className='profile__container'>
          <div className='input-container input-container_name'>
            <label className='profile__label' htmlFor='profile-name'>Имя</label>
            <input className={nameError === '' ? 'profile__input profile__input_name' : 'profile__input profile__input_name profile__input_error'}
              id='profile-name' placeholder='Имя' onChange={onChangeName} value={name || ''} pattern="^[А-Яа-яЁёa-zA-Z\s-]+$" minLength='2' maxLength='30' requared="true" />
          </div>
          <span className='form__error-span' htmlFor='profile-name'>{nameError}</span>

          <div className='input-container input-container_email'>
            <label className='profile__label' htmlFor='profile-email'>E-mail</label>
            <input className={emailError === '' ? 'profile__input' : 'profile__input profile__input_error'} id='profile-email' placeholder='E-mail'
              onChange={onChangeEmail} value={email || ''} type='email' pattern={EMAIL_VALID} requared="true" />
          </div>
          <span className='form__error-span' htmlFor='profile-email'>{emailError}</span>
        </div>
        <p className='form__update-span'>{updateProfileText}</p>
        <button className={!disable ? 'button profile__button' : 'button profile__button profile__button_disabled'} disabled={disable} type='submit'>Редактировать</button>
        <button className='button profile__button profile__button_out' type='button' onClick={handleLogout}>Выйти из аккаунта</button>
      </form>
    </section>
  )
};

export default Profile;
import React, {useEffect, useState} from 'react';
import useInput from '../../hooks/useInput';

import './Register.css';
import AuthForm from '../AuthForm/AuthForm';

function Register({ handleRegister, registerError, registerErrorText, submitButtonDisabled }) {
  const [disable, setDisable] = useState(true)

  const { value: name, onChange: onChangeName, errorMessage: nameError } = useInput('')
  const { value: email, onChange: onChangeEmail, errorMessage: emailError } = useInput('')
  const { value: password, onChange: onChangePassword, errorMessage: passwordError } = useInput('')

  useEffect(() => {
    if (nameError=== '' && emailError=== '' && passwordError=== ''  && name !== '' && email !== '' && password !== '') {
      setDisable(false)
    }
    else {setDisable(true)}
  }, [nameError, emailError,passwordError, name, email, password])

  function handleSubmitAuth(e) {
    e.preventDefault()
    handleRegister(name, email, password)
  }

  return (
    <section className='register'>

      <AuthForm title='Добро пожаловать!' buttonText='Зарегистрироваться' authText='Уже зарегистрированы?' authButtonText='Войти'
        authButtonTextPath="/signin" buttonClass="register-button" handleSubmit={handleSubmitAuth} formError={registerError} 
        errorText={registerErrorText} disable={disable} submitButtonDisabled={submitButtonDisabled}>

        <label className='form__label-register' htmlFor='input-name'>Имя</label>
        <input className={nameError === '' ? 'form__input-register' : 'form__input-register form__input_error'} id='input-name' placeholder='Имя' 
        value={name} onChange={onChangeName} type="text" pattern="^[А-Яа-яЁёa-zA-Z\s-]+$" minLength='2' maxLength='30' required />
        <span className='form__error-span' htmlFor='input-name'>{nameError || ''}</span>

        <label className='form__label-register' htmlFor='input-email'>E-mail</label>
        <input className={emailError === '' ? 'form__input-register' : 'form__input-register form__input_error'} id='input-email' placeholder='Email' 
        value={email} onChange={onChangeEmail} type='email' pattern={'^([a-z]){1,}[a-z0-9]*([.+_-]){0,1}[0-9a-z]+(@){1}([0-9a-z]+)(\\.([a-z]){2,}){1}(\\.[a-z]{2,})?$'} required />
        <span className='form__error-span' htmlFor='input-email'>{emailError || ''}</span>

        <label className='form__label-register' htmlFor='input-password'>Пароль</label>
        <input className={passwordError === '' ? 'form__input-register' : 'form__input-register form__input_error'} id='input-password' 
        placeholder='Пароль' value={password} onChange={onChangePassword} type='password' minLength='2' maxLength='30' required />
        <span className='form__error-span' htmlFor='input-password'>{passwordError || ''}</span>
      </AuthForm>
    </section>
  )
};

export default Register;
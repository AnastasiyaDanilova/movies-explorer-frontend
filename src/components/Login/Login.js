import React, { useState, useEffect } from 'react';
import useInput from '../../hooks/useInput';
import { EMAIL_VALID } from '../../utils/const';
import AuthForm from '../AuthForm/AuthForm';

import './Login.css';

function Login({ handleLogin, loginError, loginErrorText, submitButtonDisabled }) {
  
  const [disable, setDisable] = useState(true)

  const { value: email, onChange: onChangeEmail, errorMessage: emailError } = useInput('')
  const { value: password, onChange: onChangePassword, errorMessage: passwordError } = useInput('')

  function handleSubmitAuth(e) {
    e.preventDefault()
    handleLogin(email, password)
  }

  useEffect(() => {
    if (emailError === '' && passwordError === '' && email !== '' && password !== '') {
      setDisable(false)
    }
    else { setDisable(true) }
  }, [emailError, passwordError, email, password])

  return (
    <section className='login'>

      <AuthForm title='Рады видеть!' buttonText='Войти' authText='Ещё не зарегистрированы?'
        authButtonText='Регистрация' authButtonTextPath="/signup" buttonClass="login-button"
        handleSubmit={handleSubmitAuth} formError={loginError} errorText={loginErrorText} disable={disable} submitButtonDisabled={submitButtonDisabled}>
        <label className='form__label' htmlFor='input-email'>E-mail</label>
        <input className='form__input' id='input-email' placeholder='Email' value={email || ''} onChange={onChangeEmail} type='email' pattern={EMAIL_VALID} disabled={submitButtonDisabled} required />
        <span className='form__error-span' htmlFor='input-email'>{emailError}</span>

        <label className='form__label' htmlFor='input-password'>Пароль</label>
        <input className='form__input' id='input-password' placeholder='Пароль' value={password || ''} onChange={onChangePassword} type='password' disabled={submitButtonDisabled} required />
        <span className='form__error-span' htmlFor='input-password'>{passwordError}</span>
      </AuthForm>

    </section>
  )
};

export default Login;
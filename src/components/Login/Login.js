import React from 'react';

import './Login.css';
import AuthForm from '../AuthForm/AuthForm';

function Login({handleLogin}) {
  const [email, setEmail] = React.useState('')
  const [password, setPassword] = React.useState('')

  function changeEmail (e) {
    setEmail(e.target.value)
  }

  function changePassword (e) {
    setPassword(e.target.value)
  }

  function handleSubmitAuth(e) {
    e.preventDefault()
    handleLogin(email, password)
  }

  return (
    <section className='login'>

        <AuthForm title='Рады видеть!' buttonText='Войти' authText='Ещё не зарегистрированы?' 
        authButtonText='Регистрация' authButtonTextPath="/signup" buttonClass="login-button" handleSubmit={handleSubmitAuth}>
            <label className='form__label' htmlFor='input-email'>E-mail</label>
            <input className='form__input' id='input-email' placeholder='Email' value={email || ''} onChange={changeEmail} type='email' required />

            <label className='form__label' htmlFor='input-password'>Пароль</label>
            <input className='form__input' id='input-password' placeholder='Пароль' value={password || ''} onChange={changePassword} type='password' required />
        </AuthForm>

    </section>
  )
};

export default Login;
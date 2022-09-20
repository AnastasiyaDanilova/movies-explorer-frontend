import React from 'react';

import './Login.css';
import AuthForm from '../AuthForm/AuthForm';

function Login() {

  return (
    <section className='login'>

        <AuthForm title='Рады видеть!' buttonText='Войти' authText='Ещё не зарегистрированы?' 
        authButtonText='Регистрация' authButtonTextPath="/signup" buttonClass="login-button">
            <label className='form__label' for='input-email'>E-mail</label>
            <input className='form__input' id='input-email' placeholder='Email' type='email' required />

            <label className='form__label' for='input-password'>Пароль</label>
            <input className='form__input' id='input-password' placeholder='Пароль' type='password' required />
        </AuthForm>

    </section>
  )
};

export default Login;
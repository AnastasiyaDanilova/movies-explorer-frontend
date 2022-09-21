import React from 'react';

import './Register.css';
import AuthForm from '../AuthForm/AuthForm';

function Register() {

  return (
    <section className='register'>

        <AuthForm title='Добро пожаловать!' buttonText='Зарегистрироваться' authText='Уже зарегистрированы?' 
        authButtonText='Войти' authButtonTextPath="/signin" buttonClass="register-button">
        
            <label className='form__label-register' for='input-name'>Имя</label>
            <input className='form__input-register' id='input-name' placeholder='Имя' required />

          
            <label className='form__label-register' for='input-email'>E-mail</label>
            <input className='form__input-register' id='input-email' placeholder='Email' type='email' required />

            <label className='form__label-register' for='input-password'>Пароль</label>
            <input className='form__input-register' id='input-password' placeholder='Пароль' type='password' required />
        </AuthForm>

    </section>
  )
};

export default Register;
import React, {useState, useEffect} from 'react';
import useInput from '../../hooks/useInput';


import './Login.css';
import AuthForm from '../AuthForm/AuthForm';

function Login({handleLogin, loginError, loginErrorText}) {
  const [disable, setDisable] = useState(true)

  const {value:email, onChange:onChangeEmail, errorMessage:emailError} = useInput('')
  const {value:password, onChange:onChangePassword, errorMessage: passwordError} = useInput('')

  function handleSubmitAuth(e) {
    e.preventDefault()
    handleLogin(email, password)
  }

  useEffect(() => {
    if (emailError=== '' && passwordError=== ''  && email !== '' && password !== '') {
      setDisable(false)
    }
    else {setDisable(true)}
  }, [emailError,passwordError,email, password])

  return (
    <section className='login'>

        <AuthForm title='Рады видеть!' buttonText='Войти' authText='Ещё не зарегистрированы?' 
        authButtonText='Регистрация' authButtonTextPath="/signup" buttonClass="login-button" handleSubmit={handleSubmitAuth} formError={loginError} errorText={loginErrorText} disable={disable}>
            <label className='form__label' htmlFor='input-email'>E-mail</label>
            <input className='form__input' id='input-email' placeholder='Email' value={email || ''} onChange={onChangeEmail} type='email' pattern={'^([a-z]){1,}[a-z0-9]*([.+_-]){0,1}[0-9a-z]+(@){1}([0-9a-z]+)(\\.([a-z]){2,}){1}(\\.[a-z]{2,})?$'} required />
            <span className='form__error-span' htmlFor='input-email'>{emailError}</span>

            <label className='form__label' htmlFor='input-password'>Пароль</label>
            <input className='form__input' id='input-password' placeholder='Пароль' value={password || ''} onChange={onChangePassword} type='password' required />
            <span className='form__error-span' htmlFor='input-password'>{passwordError}</span>
        </AuthForm>

    </section>
  )
};

export default Login;
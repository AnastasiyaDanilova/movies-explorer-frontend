import React, {useEffect, useState} from 'react';

import './Register.css';
import AuthForm from '../AuthForm/AuthForm';

function Register({ handleRegister }) {


  
  // const [name, setName] = React.useState('')
  // const [email, setEmail] = React.useState('')
  // const [password, setPassword] = React.useState('')


  // function changeName (e) {
  //   setName(e.target.value)
  // }

  // function changeEmail (e) {
  //   setEmail(e.target.value)
  // }

  // function changePassword (e) {
  //   setPassword(e.target.value)
  // }

  // function handleSubmitAuth(e) {
  //   e.preventDefault()
  //   handleRegister(name, email, password)
  // }

  const useInput = (initialValue) => {

    const [value, setValue] = useState(initialValue)
    const [outInput, setOutInput] = useState(false)
  
    function onChange(e) {
      setValue(e.target.value)
      console.log('onChange')
    }
  
    function onBlur(e) {
      setOutInput(true)
      console.log('onBlur', outInput)
    }
  
    return {
      value,
      onChange,
      onBlur
    }
  
  }

  const useValidation = (value, validations) => {

    useEffect(()=> {

    }, [])

  }

  const name = useInput('')
  const email = useInput('')
  const password = useInput('')

  console.log('name.value', email.value)


  return (
    <section className='register'>

    <AuthForm title='Добро пожаловать!' buttonText='Зарегистрироваться' authText='Уже зарегистрированы?'
      authButtonText='Войти' authButtonTextPath="/signin" buttonClass="register-button" >

      <label className='form__label-register' htmlFor='input-name'>Имя</label>
      <input className='form__input-register' id='input-name' placeholder='Имя' value={name.value} onChange={name.onChange} onBlur={name.onBlur} type="text" pattern="^[А-Яа-яЁёa-zA-Z\s-]+$" required />


      <label className='form__label-register' htmlFor='input-email'>E-mail</label>
      <input className='form__input-register' id='input-email' placeholder='Email' value={email.value} onChange={email.onChange} onBlur={name.onBlur} type='email' required />

      <label className='form__label-register' htmlFor='input-password'>Пароль</label>
      <input className='form__input-register' id='input-password' placeholder='Пароль' value={password.value} onChange={password.onChange} onBlur={name.onBlur} type='password' required />
    </AuthForm>

  </section>
    // <section className='register'>

    //   <AuthForm title='Добро пожаловать!' buttonText='Зарегистрироваться' authText='Уже зарегистрированы?'
    //     authButtonText='Войти' authButtonTextPath="/signin" buttonClass="register-button" handleSubmit={handleSubmitAuth}>

    //     <label className='form__label-register' htmlFor='input-name'>Имя</label>
    //     <input className='form__input-register' id='input-name' placeholder='Имя' value={name || ''} onChange={changeName} type="text" pattern="^[А-Яа-яЁёa-zA-Z\s-]+$" required />


    //     <label className='form__label-register' htmlFor='input-email'>E-mail</label>
    //     <input className='form__input-register' id='input-email' placeholder='Email' value={email || ''} onChange={changeEmail} type='email' required />

    //     <label className='form__label-register' htmlFor='input-password'>Пароль</label>
    //     <input className='form__input-register' id='input-password' placeholder='Пароль' value={password || ''} onChange={changePassword} type='password' required />
    //   </AuthForm>

    // </section>
    
  )
};

export default Register;
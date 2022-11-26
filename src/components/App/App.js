import React from 'react';
import { Redirect, Route, Switch, useHistory, useLocation } from 'react-router-dom';

import { register, autorize, checkToken, getProfile, updateProfile, getSavedMovie, deleteMovie } from '../../utils/MainApi';
import { CurrentUserContext } from '../../context/CurrentUserContext';
import Header from '../Header/Header';
import Main from '../Main/Main';
import Footer from '../Footer/Footer';
import Login from '../Login/Login';
import Register from '../Register/Register';
import Movies from '../Movies/Movies';
import SavedMovies from '../SavedMovies/SavedMovies';
import Profile from '../Profile/Profile';
import PopupError from '../PopupError/PopupError';
import NotFoundPage from '../NotFoundPage/NotFoundPage';
import ProtectedRoute from '../ProtectedRoute/ProtectedRoute';

import './App.css'

function App() {

  let location = useLocation();
  const history = useHistory()

  const [currentUser, setCurrentUser] = React.useState({});

  const [loggedIn, setLoggedIn] = React.useState(false);
  const [loginError, setLoginError] = React.useState('');
  const [loginErrorText, setLoginErrorText] = React.useState(false);
  const [updateProfileText, setUpdateProfileText] = React.useState('');

  const [registerError, setRegisterError] = React.useState(false);
  const [registerErrorText, setRegisterErrorText] = React.useState('');

  const [savedMovies, setSavedMovies] = React.useState([])

  const [popupError, setPopupError] = React.useState(false);
  const [isLoading, setIsLoading] = React.useState(false);
  const [submitButtonDisabled, setSubmitButtonDisabled] = React.useState(false);

  // защита входа и выхода от авторизованных пользователей
  React.useEffect(()=> {
    if (loggedIn && location.pathname === '/signup'){
      history.push('/movies')
    }
    
    if(loggedIn && location.pathname === '/signin') {
      history.push('/movies')
    }
  }, [loggedIn, location])

  React.useEffect(()=> {
    history.listen(console.log)
  })

  // проверка входа
  React.useEffect(() => {
    const token = localStorage.getItem('token')

    if (token) {
      checkToken(token)
        .then((res) => {
          if (res) {
            setLoggedIn(true);
            history.push(location)
          }
        })
        .catch((err) => {
          console.log(err)
          handleLogout()
          setLoggedIn(false)
        })
    }
  }, [])

  // получени данных пользователя
  React.useEffect(() => {
    if (loggedIn) {
      getProfile()
        .then((res) => {
          setCurrentUser(res)
        })
        .catch((err) => {
          console.log(err)
        })
    }
  }, [loggedIn])

  // получение сохраненных фильмов
  React.useEffect(() => {
    setIsLoading(true)
    if (loggedIn && currentUser._id) {
      getSavedMovie()
        .then((res) => {
          setSavedMovies(res.filter((i) => i.owner === currentUser._id))

        })
        .catch((err) => console.log(err))
        .finally(() => { setIsLoading(false) })
    }
  }, [loggedIn, currentUser._id])

  // регистрация
  function handleRegister(name, email, password) {
    setSubmitButtonDisabled(true)
    register(name, email, password)
      .then((res) => {
        if (res) {
          handleLogin(email, password)
          setRegisterError(false)
        }
      }).catch((err) => {
        setRegisterError(true)
        if (err === 400) {
          setRegisterErrorText('Кажется, данные не верны...');
        }
        if (err === 409) {
          setRegisterErrorText('Этот email уже занят');
        }
        if (err === 500) {
          setRegisterErrorText('Ошибка сервера');
        }
        console.log(err)
        setLoggedIn(false)
      })
      .finally(() => setSubmitButtonDisabled(false))
  }

  // вход
  function handleLogin(email, password) {
    setSubmitButtonDisabled(true)
    autorize(email, password)
      .then((res) => {
        if (res) {
          localStorage.setItem('token', res.token)
          history.push('/movies')
          setLoggedIn(true)
          setLoginError(false)
        }

      })
      .catch((err) => {
        setLoginError(true)
        if (err === 400) {
          setLoginErrorText('Кажется, данные не верны...');
        }
        if (err === 401) {
          setLoginErrorText('Неверный email или пароль');
        }
        if (err === 500) {
          setLoginErrorText('Ошибка сервера');
        }
        setLoggedIn(false)
        console.log(err)
      })
      .finally(() => setSubmitButtonDisabled(false));
  }

  // обновлениее данных пользователяя
  function patchUserInfo(userName, userEmail) {
    setSubmitButtonDisabled(true)
    updateProfile(userName, userEmail)
      .then((res) => {
        setCurrentUser(res)
      })
      .catch((err) => {
        console.log(err)
      })
      .finally(() => {
        setUpdateProfileText('Данные изменены')
      })
      .finally(() => setSubmitButtonDisabled(false))
  }

  // выход
  function handleLogout() {
    setLoggedIn(false);
    history.push('/')
    localStorage.clear();
  }

  // удаление фильма
  function deleteMovieCard(movie) {
    setSubmitButtonDisabled(true)
    deleteMovie(movie._id)
      .then((res) => {
        setSavedMovies((state) => state.filter((c) => c._id !== movie._id))
      })
      .catch((err) => setPopupError(true))
      .finally(() => setSubmitButtonDisabled(false))
  }

  // закрытие попапа ошибки
  function closePopupError() {
    setPopupError(false)
  }


  return (
    <div className="page">
      <CurrentUserContext.Provider value={currentUser}>
        <Header signupLink="/signup" signinLink="/signin" lendingLink="/" filmsLink="/movies"
          savedFilmsLink="/saved-movies" accountLink="/profile" loggedIn={loggedIn} />

        <Switch>

          <Route exact path="/">
            <Main />
          </Route>

          <Route path="/signin">
            <Login handleLogin={handleLogin} loginError={loginError} loginErrorText={loginErrorText} submitButtonDisabled={submitButtonDisabled} />
          </Route>

          <Route path="/signup">
            <Register handleRegister={handleRegister} registerError={registerError} registerErrorText={registerErrorText}
              submitButtonDisabled={submitButtonDisabled} />
          </Route>

          <ProtectedRoute path="/movies" loggedIn={loggedIn}>
            <Movies
              savedMovies={savedMovies} setSavedMovies={setSavedMovies}
              setPopupError={setPopupError} deleteMovieCard={deleteMovieCard}
              submitButtonDisabled={submitButtonDisabled} setSubmitButtonDisabled={setSubmitButtonDisabled} handleLogout={handleLogout} />
          </ProtectedRoute>

          <ProtectedRoute path="/saved-movies" loggedIn={loggedIn}>
            <SavedMovies savedMovies={savedMovies} isLoading={isLoading} deleteMovieCard={deleteMovieCard}
              submitButtonDisabled={submitButtonDisabled} setSubmitButtonDisabled={setSubmitButtonDisabled} />
          </ProtectedRoute >

          <ProtectedRoute path="/profile" loggedIn={loggedIn}>
            <Profile handleLogout={handleLogout} currentUser={currentUser} patchUserInfo={patchUserInfo} updateProfileText={updateProfileText}
              setUpdateProfileText={setUpdateProfileText} submitButtonDisabled={submitButtonDisabled} />
          </ProtectedRoute>

          <Route path="*">
            <NotFoundPage />
          </Route>

        </Switch>

        <Footer />

        <PopupError closePopupError={closePopupError} popupError={popupError} />
        
      </CurrentUserContext.Provider>
    </div>
  );
}

export default App;

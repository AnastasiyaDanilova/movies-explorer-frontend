import React from 'react';
import './App.css'
import { Route, Switch, useHistory, useLocation } from 'react-router-dom';
import { CurrentUserContext } from '../../context/CurrentUserContext';
import { register, autorize, checkToken, getProfile, updateProfile, getSavedMovie, deleteMovie } from '../../utils/MainApi';
import Header from '../Header/Header';
import Main from '../Main/Main';
import Footer from '../Footer/Footer';
import Login from '../Login/Login';
import Register from '../Register/Register';
import Movies from '../Movies/Movies';
import SavedMovies from '../SavedMovies/SavedMovies';
import Profile from '../Profile/Profile';
import NotFoundPage from '../NotFoundPage/NotFoundPage';
import ProtectedRoute from '../ProtectedRoute/ProtectedRoute';
import PopupError from '../PopupError/PopupError';

function App() {
  let location = useLocation();
  const history = useHistory()

  const [loggedIn, setLoggedIn] = React.useState(false);
  const [currentUser, setCurrentUser] = React.useState({});
  const [menuOpen, setMenuOpen] = React.useState(false);

  const [registerError, setRegisterError] = React.useState(false);
  const [registerErrorText, setRegisterErrorText] = React.useState('');

  const [loginError, setLoginError] = React.useState('');
  const [loginErrorText, setLoginErrorText] = React.useState(false);

  const [savedMovies, setSavedMovies] = React.useState([])

  const [popupError, setPopupError] = React.useState(false);
  const [isLoading, setIsLoading] = React.useState(false);

  

  // получение сохраненных фильмов
  React.useEffect(() => {
    setIsLoading(true)
    if (localStorage.getItem('token')) {
      getSavedMovie()
        .then((res) => {
          setSavedMovies(res.filter((i) => i.owner._id === currentUser._id))
        })
        .catch((err) => console.log(err))
        .finally(() => { setIsLoading(false) })
    }
  }, [currentUser])

  // удаление фильма
  function deleteMovieCard(movie) {
    deleteMovie(movie._id)
      .then((res) => {
        setSavedMovies((state) => state.filter((c) => c._id !== movie._id))
      })
      .catch((err) => setPopupError(true))
  }

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

  // открыть закрыть меню
  function openMenu() {
    setMenuOpen(true)
  }

  function closeMenu() {
    setMenuOpen(false)
  }

  // регистрацция
  function handleRegister(name, email, password) {
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
  }

  // вход
  function handleLogin(email, password) {
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
      });
  }

  // выход
  function handleLogout() {
    setLoggedIn(false);
    history.push('/')
    localStorage.clear();
  }

  // обновлениее данныъх пользователяя
  function patchUserInfo(userName, userEmail) {
    updateProfile(userName, userEmail)
      .then((res) => {
        setCurrentUser(res)
      })
      .catch((err) => {
        console.log(err)
      })
  }
  function closePopupError() {
    setPopupError(false)
}
  return (
    <div className="page">
      <CurrentUserContext.Provider value={currentUser}>
        <Header signupLink="/signup" signinLink="/signin" lendingLink="/" filmsLink="/movies"
          savedFilmsLink="/saved-movies" accountLink="/profile" loggedIn={loggedIn} menuOpen={menuOpen} onOpenMenu={openMenu} onCloseMenu={closeMenu} />

        <Switch>

          <Route exact path="/">
            <Main />
          </Route>

          <Route path="/signin">
            <Login handleLogin={handleLogin} loginError={loginError} loginErrorText={loginErrorText} />
          </Route>

          <Route path="/signup">
            <Register handleRegister={handleRegister} registerError={registerError} registerErrorText={registerErrorText} />
          </Route>

          <ProtectedRoute path="/movies" loggedIn={loggedIn}>
            <Movies 
              savedMovies={savedMovies} setSavedMovies={setSavedMovies}
              setPopupError={setPopupError} deleteMovieCard={deleteMovieCard} />
          </ProtectedRoute>

          <ProtectedRoute path="/saved-movies" loggedIn={loggedIn}>
            <SavedMovies savedMovies={savedMovies} isLoading={isLoading} deleteMovieCard={deleteMovieCard}
            />
          </ProtectedRoute >

          <ProtectedRoute path="/profile" loggedIn={loggedIn}>
            <Profile handleLogout={handleLogout} currentUser={currentUser} patchUserInfo={patchUserInfo} />
          </ProtectedRoute>

          <Route path="*">
            <NotFoundPage />
          </Route>

        </Switch>
        <Footer />
        <PopupError closePopupError={closePopupError} popupError={popupError}/>
      </CurrentUserContext.Provider>
    </div>
  );
}

export default App;

import React from 'react';
import './App.css'
import { Route, Switch, useHistory } from 'react-router-dom';
import { CurrentUserContext } from '../../context/CurrentUserContext';
import { register, autorize, checkToken, getProfile, updateProfile } from '../../utils/MainApi';
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

function App() {

  const [loggedIn, setLoggedIn] = React.useState(false);
  const [currentUser, setCurrentUser] = React.useState({});
  const [menuOpen, setMenuOpen] = React.useState(false);

  const [registerError, setRegisterError] = React.useState(false);
  const [registerErrorText, setRegisterErrorText] = React.useState('');

  const [loginError, setLoginError] = React.useState('');
  const [loginErrorText, setLoginErrorText] = React.useState(false);


  const history = useHistory()

  React.useEffect(() => {
    const token = localStorage.getItem('token')

    if (token) {
      checkToken(token)
        .then((res) => {
          if (res) {
            setLoggedIn(true);
          }
        })
        .catch((err) => {
          console.log(err)
        })
    }
  }, [])

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

  function openMenu() {
    setMenuOpen(true)
  }

  function closeMenu() {
    setMenuOpen(false)
  }

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

  function handleLogout() {
    localStorage.removeItem('token');
    setLoggedIn(false);
    history.push('/')
  }

  function patchUserInfo(userName, userEmail) {
    updateProfile(userName, userEmail)
      .then((res) => {
        setCurrentUser(res)
      })
      .catch((err) => {
        console.log(err)
      })
  }
console.log(loggedIn)
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
            <Movies />
          </ProtectedRoute>

          <ProtectedRoute path="/saved-movies" loggedIn={loggedIn}>
            <SavedMovies />
          </ProtectedRoute >

          <ProtectedRoute path="/profile" loggedIn={loggedIn}>
            <Profile handleLogout={handleLogout} currentUser={currentUser} patchUserInfo={patchUserInfo} />
          </ProtectedRoute>

          <Route path="*">
            <NotFoundPage />
          </Route>

        </Switch>
        <Footer />

      </CurrentUserContext.Provider>
    </div>
  );
}

export default App;

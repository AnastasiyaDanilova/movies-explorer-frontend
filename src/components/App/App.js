import React from 'react';
import './App.css'
import { Route, Switch, useHistory } from 'react-router-dom';
import { CurrentUserContext } from '../../context/CurrentUserContext';
import { register, autorize, checkToken } from '../../utils/MainApi';
import Header from '../Header/Header';
import Main from '../Main/Main';
import Footer from '../Footer/Footer';
import Login from '../Login/Login';
import Register from '../Register/Register';
import Movies from '../Movies/Movies';
import SavedMovies from '../SavedMovies/SavedMovies';
import Profile from '../Profile/Profile';
import NotFoundPage from '../NotFoundPage/NotFoundPage';
// import ProtectedRoute from '../ProtectedRoute/ProtectedRoute';

function App() {

  const [loggedIn, setLoggedIn] = React.useState(false);
  const [currentUser, setCurrentUser] = React.useState({});
  const [menuOpen, setMenuOpen] = React.useState(false);

  const history = useHistory()

  function openMenu() {
    setMenuOpen(true)
  }

  function closeMenu() {
    setMenuOpen(false)
  }

  function useCheckToken() {
    React.useEffect(() => {
      if (localStorage.getItem('token')) {
        setLoggedIn(true);
      };
      return;
    }, [])
  }

  useCheckToken()

  function handleRegister(name, email, password) {
    register(name, email, password)
      .then((res) => {
        if (res) {
          handleLogin(email, password)
        }
      }).catch((err) => {
        console.log(err)
        setLoggedIn(false)
      })
  }

  function handleLogin(email, password) {
    autorize(email, password)
      .then((res) => {
        console.log(res)
        if (res) {
          localStorage.setItem('token', res.token)
          history.push('/movies')
          setLoggedIn(true)
          console.log('then')
        }
        
      })
      .catch((err) => {
        setLoggedIn(false)
        console.log('catch')
        console.log('error', err)
      });
  }



  // function handleCheckToken() {

  //   if (localStorage.getItem('token')) {

  //     let jwt = localStorage.getItem('token')
  //     checkToken(jwt).then((res) => {
  //       if (res) {
  //         setLoggedIn(true);
  //         history.push('/movies')
  //         console.log('checktoken', loggedIn)
  //       }
  //     }).catch((res) => console.log(res));
  //   };
  //   return;
  // };

  function handleLogout() {
    localStorage.removeItem('token');
    setLoggedIn(false);
    history.push('/')
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
            <Login handleLogin={handleLogin} />
          </Route>

          <Route path="/signup">
            <Register handleRegister={handleRegister} />
          </Route>

          <Route path="/movies">
            <Movies />
          </Route >

          <Route path="/saved-movies">
            <SavedMovies />
          </Route >

          <Route path="/profile">
            <Profile handleLogout={handleLogout} />
          </Route>

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

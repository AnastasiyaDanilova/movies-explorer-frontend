import React from 'react';
import './App.css'
import { Route, Switch } from 'react-router-dom';
import { CurrentUserContext } from '../../context/CurrentUserContext';
import Header from '../Header/Header';
import Main from '../Main/Main';
import Footer from '../Footer/Footer';
import Login from '../Login/Login';
import Register from '../Register/Register';
import Movies from '../Movies/Movies';
import ProtectedRoute from '../ProtectedRoute/ProtectedRoute';

function App() {

  const [loggedIn, setLoggedIn] = React.useState(true);
  const [menuOpen, setMenuOpen] = React.useState(false);

  function openMenu() {
    setMenuOpen(true)
  }

  function closeMenu() {
    setMenuOpen(false)
  }


  return (
    <div className="page">
      <CurrentUserContext.Provider>

        <Header signupLink="/signup" signinLink="/signin" lendingLink="/" filmsLink="/movies" 
        savedFilmsLink="/saved-movies" accountLink="/profile" loggedIn={loggedIn} menuOpen={menuOpen} onOpenMenu={openMenu} onCloseMenu={closeMenu} />
        <Switch>
          <Route exact path="/">
            <Main />
          </Route>

          <Route path="/signin">
            <Login />
          </Route>

          <Route path="/signup">
            <Register />
          </Route>

          <ProtectedRoute path="/movies" loggedIn={loggedIn}>
            <Movies />
          </ProtectedRoute >

        </Switch>
        <Footer />

      </CurrentUserContext.Provider>
    </div>
  );
}

export default App;

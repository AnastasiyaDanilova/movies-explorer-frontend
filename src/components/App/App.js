import React from 'react';
import './App.css'
import { Route, Switch } from 'react-router-dom';
import { CurrentUserContext } from '../../context/CurrentUserContext';
import Header from '../Header/Header';
import Main from '../Main/Main';
import Footer from '../Footer/Footer';

function App() {
  return (
    <div className="page">
      <CurrentUserContext.Provider>
        <Switch>
          <Route exact path="/">
            <Header signupLink="/signup" signinLink="/signin" />
            <Main />
            <Footer />
          </Route>

          <Route path="/signin">
            <Header />
          </Route>

          <Route path="/signup"></Route>
        </Switch>
      </CurrentUserContext.Provider>
    </div>
  );
}

export default App;

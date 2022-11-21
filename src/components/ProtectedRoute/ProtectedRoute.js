import React from 'react';
import { Route, Redirect } from "react-router-dom";

const ProtectedRoute = ({ loggedIn, children, path }) => {
  return (
    <Route path={path}>
      {loggedIn ? children : <Redirect to="/" />}
    </Route>
  );
}

export default ProtectedRoute;
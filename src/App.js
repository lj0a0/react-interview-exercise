import React, { Component } from "react";
import { Route, Link, Switch, Redirect } from "react-router-dom";
import * as Constants from "./util/constants";

import SignIn from "./pages/index";
import Home from "./pages/Home";

export default function App() {
  return (
    <Switch>
      <Route exact path="/" render={props => <SignIn {...props} />} />
      <Route exact path="/home" render={props => <Home {...props} />} />
      <Route
        path="/github-oauth"
        component={() => {
          window.location.href = Constants.URL_GITHUB_OAUTH;
          return null;
        }}
      />
      <Redirect to="/" />
    </Switch>
  );
}

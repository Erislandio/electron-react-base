import React from "react";
import { Route, BrowserRouter as Router } from "react-router-dom";
import { Home } from "./screens/home/Home";
import { Account } from "./screens/account/Account";
import { Login } from "./screens/login/Login";

function IndexRoutes() {
  return (
    <Router>
      <Route path="/dashboard" component={Home} exact />
      <Route path="/account" exact component={Account} />
      <Route path="/" exact component={Login} />
    </Router>
  );
}

export default IndexRoutes;

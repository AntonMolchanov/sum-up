import React from "react";
import { Switch, Route } from "react-router-dom";
import ProtectedRoute from "./ProtectedRoute";
import Home from "../pages/Home";
import Login from "../pages/Login";
import Register from "../pages/Register";
import Page404 from "./Page404";
import NewSituation from "../pages/NewSituation";
import Pleasures from "../pages/Pleasures";
import NewPleasure from "../pages/NewPleasure";

const AppRoutes = () => {
  return (
    <Switch>
      <ProtectedRoute path="/" exact component={Home} />
      <ProtectedRoute path="/login" exact component={Login} />
      <ProtectedRoute path="/new" component={NewSituation} />
      <ProtectedRoute path="/newPleasure" component={NewPleasure} />
      <ProtectedRoute path="/pleasures" component={Pleasures} />
      <ProtectedRoute path="/register" exact component={Register} />

      <Route path="*" render={Page404} />
    </Switch>
  );
};

export default AppRoutes;

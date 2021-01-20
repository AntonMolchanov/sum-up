import React from 'react';
import {Switch, Route} from "react-router-dom";
import ProtectedRoute from "./ProtectedRoute";
import Home from "../pages/Home";
import Login from "../pages/Login";
import Register from "../pages/Register";
import Page404 from "./Page404";

const AppRoutes = () => {
  return (
    <Switch>
      <ProtectedRoute path='/' exact component={Home}/>
      <ProtectedRoute path='/login' component={Login}/>
      
      <Route path='/register' component={Register}/>
      
      <Route path='*' render={Page404}/>
    </Switch>
  );
};

export default AppRoutes;
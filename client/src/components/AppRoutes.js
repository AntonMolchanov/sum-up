import React from 'react';
import {Switch, Route} from "react-router-dom";
import ProtectedRoute from "./ProtectedRoute";
import {useSelector} from "react-redux";
import {userSelectors} from "../redux/user";
import Home from "../pages/Home";
import Login from "../pages/Login";
import Register from "../pages/Register";

const AppRoutes = () => {
  return (
    <Switch>
      <ProtectedRoute path='/login' component={Login}/>
      <Route path='/register' component={Register}/>
      <ProtectedRoute path='/' component={Home}/>
    </Switch>
  );
};

export default AppRoutes;
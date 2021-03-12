import React from "react";
import { Redirect, Route } from "react-router-dom";
import PropTypes from "prop-types";
import { useSelector } from "react-redux";
import { userSelectors } from "../redux/user";

const ProtectedRoute = ({
  component: ComponentToRoute,
  protectedRender,
  path,
  ...restProps
}) => {
  const isAuth = useSelector(userSelectors.isAuth);

  return (
    <Route
      {...restProps}
      render={(routerProps) => {
        if ((path === "/register" || path === "/login") && isAuth)
          return <Redirect to="/" />;
        if ((path === "/register" || path === "/login") && !isAuth)
          return <ComponentToRoute {...routerProps} />;
        if (!isAuth) {
          return <Redirect to="/login" />;
        } else if (ComponentToRoute) {
          return <ComponentToRoute {...routerProps} />;
        } else if (protectedRender) {
          return protectedRender(routerProps);
        } else {
          throw new TypeError("No any component to render");
        }
      }}
    />
  );
};

export default ProtectedRoute;

ProtectedRoute.propTypes = {
  render: PropTypes.func,
};

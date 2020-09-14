import React from "react";
import { Route, Redirect } from "react-router-dom";

const PrivateRoute = ({ component: Component, ...rest }) => {
  const token = localStorage.getItem("sigma_token");
  return (
    <Route
      {...rest}
      render={(props) =>
        token !== null ? (
          <Component {...props} />
        ) : (
          <Redirect to="/account/login" />
        )
      }
    />
  );
};

export { PrivateRoute };

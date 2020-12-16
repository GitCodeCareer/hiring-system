import React from "react";
import { Route, Redirect } from "react-router-dom";
import { useAuth0 } from "@auth0/auth0-react";
const PrivateRouteComponent = ({ children, ...rest }) => {
  const { isAuthenticated } = useAuth0();
  const isUser = isAuthenticated;

  return (
    <Route
      {...rest}
      render={() => {
        return isUser ? children : <Redirect to="/"></Redirect>;
      }}
    ></Route>
  );
};

export default PrivateRouteComponent;

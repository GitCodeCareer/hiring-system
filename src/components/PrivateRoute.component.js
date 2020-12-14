import React from "react";
import { Route, Redirect } from "react-router-dom";
import { useAuth0 } from "@auth0/auth0-react";
const PrivateRouteComponent = ({ children, ...rest }) => {
  const {
    isLoading,

    isAuthenticated,
    error,
    user,
    loginWithRedirect,
    logout,
  } = useAuth0();
  const isUser = isAuthenticated;
  console.log(isUser);
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

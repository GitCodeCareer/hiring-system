import React from "react";
import { Redirect, Route } from "react-router-dom";
import AdminPanel from "../pages/admin.page";

const PrivateRoute = ({ component: Component, ...rest }) => {
  console.log(rest);

  if (localStorage.getItem("token")) {
    if (rest.path === "/admin") {
      if (rest.admin) {
        return <Route {...rest} component={AdminPanel} exact />;
      } else {
        return <Route {...rest} render={(props) => <Redirect to="/jobs" />} />;
      }
    } else {
      return <Route {...rest} render={(props) => <Component {...rest} />} />;
    }
  } else {
    return <Route {...rest} render={(props) => <Redirect to="/login" />} />;
  }
};
export default PrivateRoute;

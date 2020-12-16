import React from "react";
import ReactDOM from "react-dom";
import { HashRouter as Router, Route } from "react-router-dom";

import { Auth0Provider } from "@auth0/auth0-react";

import JobsPage from "./pages/jobs.page";
// import LoginPage from "./pages/login.page";
// import RegisterPage from "./pages/register.page";
import ApplyPage from "./pages/apply.page";
import AdminPanel from "./pages/admin.page";
import ApplicantsPage from "./pages/applicants.page";
import CreateJob from "./pages/createJob.page";
import EditJob from "./pages/editJob.page";

import "bootstrap/dist/css/bootstrap.min.css";
import "./styles/global.css";

import PrivateRouteComponent from "./components/PrivateRoute.component";
//Add the below component for routes which are to be kept private
// import PrivateRoute from "./routing/PrivateRoute";

const App = () => {
  console.log(process.env.REACT_APP_X);
  return (
    <Router>
      {/* <Route path="/login" component={LoginPage} exact />
      <Route path="/register" component={RegisterPage} exact /> */}
      <Route path="/jobs" component={JobsPage} exact />
      <Route path="/apply" component={ApplyPage} />
      <Route path="/" component={JobsPage} exact />

      <PrivateRouteComponent path="/admin" exact>
        <AdminPanel />
      </PrivateRouteComponent>

      <PrivateRouteComponent path="/hire/applicants" exact>
        <ApplicantsPage />
      </PrivateRouteComponent>

      <PrivateRouteComponent path="/hire/new" exact>
        <CreateJob />
      </PrivateRouteComponent>

      <PrivateRouteComponent path="/hire/:jobid" exact>
        <EditJob />
      </PrivateRouteComponent>
    </Router>
  );
};

ReactDOM.render(
  <Auth0Provider
    domain={process.env.REACT_APP_DOMAIN}
    clientId={process.env.REACT_APP_CLIENT_ID}
    redirectUri={window.location.origin}
    cacheLocation="localstorage"
  >
    <App />
  </Auth0Provider>,
  document.getElementById("root-app")
);

import React from "react";
// import { render } from "react-dom";
import ReactDOM from "react-dom";

import { HashRouter as Router, Route } from "react-router-dom";

import { Auth0Provider } from "@auth0/auth0-react";

import JobsPage from "./pages/jobs.page";
import LoginPage from "./pages/login.page";
import RegisterPage from "./pages/register.page";
import ApplyPage from "./pages/apply.page";
import "bootstrap/dist/css/bootstrap.min.css";
import "./styles/global.css";
import AdminPanel from "./pages/admin.page";
import ApplicantsPage from "./pages/applicants.page";
import CreateJob from "./pages/createJob.page";
import EditJob from "./pages/editJob.page";

//Add the below component for routes which are to be kept private
import PrivateRoute from "./routing/PrivateRoute";

const App = () => {
  return (
    <Router>
      <Route path="/login" component={LoginPage} exact />
      <Route path="/register" component={RegisterPage} exact />
      <Route path="/jobs" component={JobsPage} exact />
      <Route path="/apply" component={ApplyPage} />
      <Route path="/" component={JobsPage} exact />
      <Route path="/admin" component={AdminPanel} exact />
      <Route path="/applicants" component={ApplicantsPage} exact />
      <Route path="/create-job" component={CreateJob} exact />
      <Route path="/edit-job" component={EditJob} />
    </Router>
  );
};

ReactDOM.render(
  <Auth0Provider
    domain="dev-s0xqstyv.eu.auth0.com"
    clientId="roPCql0jMSuWIZ6hWwYXYW053xUVrcg4"
    redirectUri={window.location.origin}
  >
    <App />
  </Auth0Provider>,
  document.getElementById("root-app")
);

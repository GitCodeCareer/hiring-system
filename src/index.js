import React from "react";
import { render } from "react-dom";
import { HashRouter as Router, Route } from "react-router-dom";
import JobsPage from "./pages/jobs.page";
import LoginPage from "./pages/login.page";
import RegisterPage from "./pages/register.page";
import ApplyPage from "./pages/apply.page";
import "bootstrap/dist/css/bootstrap.min.css";
import "./styles/global.css";
import AdminPanel from "./pages/admin.page";
import ApplicantsPage from "./pages/applicants.page";
<<<<<<< HEAD
=======
import CreateJob from './pages/createJob.page';
>>>>>>> bf5721322bc7043c163826b67cd9058897a2c3c5
import PrivateRoute from "./routing/PrivateRoute";

render(
  <Router>
    <Route path="/login" component={LoginPage} exact />
    <Route path="/register" component={RegisterPage} exact />
    <Route path="/jobs" component={JobsPage} exact />
    <Route path="/apply" component={ApplyPage} />
    <Route path="/" component={JobsPage} exact />
<<<<<<< HEAD
    <PrivateRoute path="/admin" component={AdminPanel} admin={false} exact />
    <PrivateRoute path="/applicants" component={ApplicantsPage} exact />
=======
    <Route path="/admin" component={AdminPanel} exact />
    <Route path="/applicants" component={ApplicantsPage} exact />
    <Route path="/create-job" component={CreateJob} exact />
>>>>>>> bf5721322bc7043c163826b67cd9058897a2c3c5
  </Router>,
  document.getElementById("root-app")
);

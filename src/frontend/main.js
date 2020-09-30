import React, { Component } from 'react';
import { render } from 'react-dom';
import { BrowserRouter, Route } from 'react-router-dom'
import JobsPage from './pages/jobs.page';
import 'bootstrap/dist/css/bootstrap.min.css';
import './styles/global.css';

render(
  <BrowserRouter>
    <Route path="/" component={JobsPage} exact />
  </BrowserRouter>,
  document.getElementById('root-app')
)
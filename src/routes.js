import React from 'react';
import { Router, Route, IndexRoute, browserHistory } from 'react-router';

//LAYOUT
import MainLayout from './layouts/main';

export const renderRoutes = () => (
  <Router history={browserHistory}>
    <Route path='/' component={MainLayout}></Route>
  </Router>
)
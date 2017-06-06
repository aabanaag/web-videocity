import React from 'react';
import { Router, Route, IndexRoute, browserHistory } from 'react-router';

//LAYOUT
import MainLayout from './layouts/main';

//PAGE
import MoviesPage from './modules/movies/pages/MoviesPage';
import MoviePage from './modules/movies/pages/MoviePage';
import LoginPage from './modules/login/pages/LoginPage';
import TransactionPage from './modules/transactions/pages/TransactionPage';

export const renderRoutes = () => (
  <Router history={browserHistory}>
    <Route path='/' component={MainLayout}>
      <IndexRoute component={LoginPage}></IndexRoute>
    </Route>
    <Route path='/movies' component={MainLayout}>
      <IndexRoute component={MoviesPage}></IndexRoute>
      <Route path='/movies/:id' component={MoviePage}></Route>
    </Route>
    <Route path='/transactions' component={MainLayout}>
      <IndexRoute component={TransactionPage}></IndexRoute>
    </Route>
  </Router>
)
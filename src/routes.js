import React from 'react';
import { Router, Route, IndexRoute, browserHistory } from 'react-router';

//LAYOUT
import MainLayout from './layouts/main';

//PAGE
import MoviesPage from './modules/movies/pages/MoviesPage';
import MoviePage from './modules/movies/pages/MoviePage';

export const renderRoutes = () => (
  <Router history={browserHistory}>
    <Route path='/' component={MainLayout}>
      <IndexRoute component={MoviesPage}></IndexRoute>
      <Route path='/:id' component={MoviePage}></Route>
    </Route>
  </Router>
)
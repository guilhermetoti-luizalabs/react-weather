import React from 'react';
import ReactRouter, { Router, Route, hashHistory, IndexRoute } from 'react-router';

import Main from '../containers/Main';
import Home from '../pages/Home';
import Search from '../pages/Search';
import Detail from '../pages/Detail';


export const routes = (
  <Router history={hashHistory}>
    <Route path='/' component={Main}>
      <IndexRoute component={Home} />
      <Route path='weather/:search' component={Search} />
      <Route path='detail/:search' component={Detail} />
    </Route>
  </Router>
);

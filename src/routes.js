import React from 'react';
import { Router, Route, Switch } from 'react-router';

import Home from './views/home';
import Login from './views/login';
import Device from './views/device';
import Account from './views/account';
import Landing from './views/landing';
import Register from './views/register';

const Routes = (props) => (
  <Router {...props}>
    <Switch>
      <Route exact path="/" component={Landing} />
      <Route exact path="/home" component={Home} />
      <Route exact path="/login" component={Login} />
      <Route exact path="/device/:id" component={Device} />
      <Route exact path="/account" component={Account} />
      <Route exact path="/register" component={Register} />
    </Switch>
  </Router>
);

export default Routes;

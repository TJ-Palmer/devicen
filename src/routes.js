import React from 'react';
import { Router, Route, Switch } from 'react-router';

import Landing from './views/landing';

const Routes = (props) => (
  <Router {...props}>
    <Route exact path="/" component={Landing} />
  </Router>
);

export default Routes;

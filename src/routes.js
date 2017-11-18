import React from 'react';
import { Router, Route, Switch } from 'react-router';

import Landing from './views/landing';

const Routes = (props) => (
  <Router {...props}>
    <div>
      <Route exact path="/" component={Landing} />
    </div>
  </Router>
);

export default Routes;

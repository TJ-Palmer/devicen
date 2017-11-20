import React from 'react';
import { Link } from 'react-router-dom';
import { Router, Route, Switch } from 'react-router';
import { AnimatedSwitch } from 'react-router-transition';

import Login from './views/login';
import Landing from './views/landing';
import Register from './views/register';

const Routes = (props) => (
  <Router {...props}>
    <div className="landing">
      <div className="landing-overlay">
        <h2 className="landing-logo"><Link to="/">Devicen</Link></h2>
        <div className="d-flex h-100">
          <AnimatedSwitch
            atEnter={{ opacity: 0 }}
            atLeave={{ opacity: 0 }}
            atActive={{ opacity: 1 }}
            className="switch-wrapper"
          >
            <Route exact path="/" component={Landing} />
            <Route exact path="/login" component={Login} />
            <Route exact path="/register" component={Register} />
          </AnimatedSwitch>
        </div>
      </div>
    </div>
  </Router>
);

export default Routes;

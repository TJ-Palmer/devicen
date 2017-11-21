import React from 'react';
import ReactDOM from 'react-dom';
import createBrowserHistory from 'history/createBrowserHistory';
import { Provider } from 'react-redux';

import Routes from './routes';
import store from './store';
import { unregister } from './registerServiceWorker';

import './css/bootstrap.min.css'
import './css/site.css';

const history = createBrowserHistory();

ReactDOM.render(
  <Provider store={store}>
    <Routes history={history} />
  </Provider>,
  document.getElementById('root')
);

unregister();

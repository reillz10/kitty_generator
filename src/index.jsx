import 'babel-polyfill';
import React from 'react';
import ReactDOM from 'react-dom';
import { Route, Switch } from 'react-router-dom';
import { Provider } from 'react-redux';
import { ConnectedRouter } from 'connected-react-router';

import KittyPage from './containers/KittyPage';
import history from './data/history';
import store from './data/store';

import './App.scss';

import apiClient from './data/apiClient';

const App = () => (
  <Provider store={store}>
    <ConnectedRouter history={history}>
      <div>
        <main>
          <Switch>
            <Route
              path="/"
              component={KittyPage}
            />
          </Switch>
        </main>
      </div>
    </ConnectedRouter>
  </Provider>
);

if (apiClient.ensurePublicOrAuthencationAndCookies(window.location.pathname)) {
  ReactDOM.render(<App />, document.getElementById('root'));
}

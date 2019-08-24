import React from 'react'
import PropTypes from 'prop-types'
import { Provider } from 'react-redux'
import { Route, BrowserRouter as Router, Switch } from 'react-router-dom'
import {Client as Styletron} from 'styletron-engine-atomic';
import {Provider as StyletronProvider} from 'styletron-react';
import {LightTheme, BaseProvider} from 'baseui';
import 'normalize.css';

import PrivateRoute from "../components/PrivateRoute";
import App from './App'
import Login from './Login'
import DevTools from "./DevTools";

const engine = new Styletron();

const Root = ({ store }) => (
  <Provider store={store}>
    <StyletronProvider value={engine}>
      <BaseProvider theme={LightTheme}>
        <React.Fragment>
          <Router>
            <Switch>
              <PrivateRoute path="/" exact component={App} />
              <Route path="/login" exact component={Login} />
            </Switch>
          </Router>
          <DevTools />
        </React.Fragment>
      </BaseProvider>
    </StyletronProvider>
  </Provider>
);

Root.propTypes = {
  store: PropTypes.object.isRequired,
};

export default Root

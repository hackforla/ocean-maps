import React from 'react'
import PropTypes from 'prop-types'
import { Provider } from 'react-redux'
import { Route, BrowserRouter as Router, Switch } from 'react-router-dom'
import App from './App'
import DevTools from "./DevTools";

const Root = ({ store }) => (
  <Provider store={store}>
    <React.Fragment>
      <Router>
        <Switch>
          <Route path="/" component={App} />
        </Switch>
      </Router>
      <DevTools />
    </React.Fragment>
  </Provider>
);

Root.propTypes = {
  store: PropTypes.object.isRequired,
};

export default Root

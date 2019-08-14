import React from 'react'
import PropTypes from 'prop-types'
import { Provider } from 'react-redux'
import { Route, BrowserRouter as Router, Switch } from 'react-router-dom'
import App from './App'
import configureStore from "../store/configureStore";
const store = configureStore();

const Root = () => (
  <Provider store={store}>
    {/*<Router>*/}
    {/*  <Switch>*/}
    {/*    <Route path="/" component={App} />*/}
    {/*  </Switch>*/}
    {/*</Router>*/}
    <App />
  </Provider>
);

Root.propTypes = {
  store: PropTypes.object.isRequired,
};

export default Root

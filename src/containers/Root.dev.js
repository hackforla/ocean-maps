import React from 'react'
import PropTypes from 'prop-types'
import { Provider } from 'react-redux'
import { Route, BrowserRouter as Router, Switch } from 'react-router-dom'
import App from './App'
import configureStore from "../store/configureStore";
import Map from "../components/Map"
import DevTools from "./DevTools";
const store = configureStore();

const Root = () => (
  <Provider store={store}>
    <React.Fragment>
      <Map />
      <DevTools />
    </React.Fragment>
  </Provider>
);

Root.propTypes = {
  store: PropTypes.object.isRequired,
};

export default Root

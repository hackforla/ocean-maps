import { createStore, applyMiddleware, compose } from 'redux'
import thunk from 'redux-thunk'
import rootReducer from '../modules'
import { enhanceReduxMiddleware } from 'kepler.gl/middleware';
import { middleware } from "../modules/websockets";

const middlewares = enhanceReduxMiddleware([thunk, middleware]);
const enhancers = [applyMiddleware(...middlewares)];

const configureStore = preloadedState => createStore(
  rootReducer,
  preloadedState, compose(...enhancers)
);

export default configureStore

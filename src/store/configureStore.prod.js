import { createStore, applyMiddleware, compose } from 'redux'
import thunk from 'redux-thunk'
import rootReducer from '../reducers'
import { enhanceReduxMiddleware } from 'kepler.gl/middleware';

const middlewares = enhanceReduxMiddleware([thunk]);
const enhancers = [applyMiddleware(...middlewares)];

const configureStore = preloadedState => createStore(
  rootReducer,
  preloadedState, compose(...enhancers)
);

export default configureStore

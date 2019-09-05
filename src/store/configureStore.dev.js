import { createStore, applyMiddleware, compose } from 'redux'
import thunk from 'redux-thunk'
import { createLogger } from 'redux-logger'
import { enhanceReduxMiddleware } from 'kepler.gl/middleware';
import rootReducer from '../modules'
import DevTools from '../containers/DevTools'
import { middleware } from "../modules/websockets";

const middlewares = enhanceReduxMiddleware([thunk, createLogger(), middleware]);
const enhancers = [applyMiddleware(...middlewares)];

const configureStore = preloadedState => {
  const store = createStore(
    rootReducer,
    preloadedState,
    compose(...enhancers, DevTools.instrument())
  );

  if (module.hot) {
    // Enable Webpack hot module replacement for reducers
    module.hot.accept('../modules', () => {
      store.replaceReducer(rootReducer)
    })
  }

  return store
};

export default configureStore

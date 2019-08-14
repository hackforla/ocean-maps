import { createStore, applyMiddleware, compose } from 'redux'
import thunk from 'redux-thunk'
import { createLogger } from 'redux-logger'
import { enhanceReduxMiddleware } from 'kepler.gl/middleware';
import rootReducer from '../reducers'
import DevTools from '../containers/DevTools'

const middlewares = enhanceReduxMiddleware([thunk, createLogger()]);
const enhancers = [applyMiddleware(...middlewares)];

const configureStore = preloadedState => {
  const store = createStore(
    rootReducer,
    preloadedState,
    compose(...enhancers, DevTools.instrument())
  );

  if (module.hot) {
    // Enable Webpack hot module replacement for reducers
    module.hot.accept('../reducers', () => {
      store.replaceReducer(rootReducer)
    })
  }

  return store
};

export default configureStore

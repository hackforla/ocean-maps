import { combineReducers } from 'redux'
import keplerGlReducer from 'kepler.gl/reducers';

import auth from './auth';

const rootReducer = combineReducers({
  keplerGl: keplerGlReducer,
  app: (state = {}, action) => state,
  auth
});

export default rootReducer

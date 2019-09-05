import { combineReducers } from 'redux'
import keplerGlReducer from 'kepler.gl/reducers';

import auth from './auth';
import websockets from "./websockets";

const rootReducer = combineReducers({
  keplerGl: keplerGlReducer,
  app: (state = {}, action) => state,
  auth,
  websockets
});

export default rootReducer

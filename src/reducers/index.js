import { combineReducers } from 'redux'
import keplerGlReducer from 'kepler.gl/reducers';

const rootReducer = combineReducers({
  keplerGl: keplerGlReducer,
  app: (state = {}, action) => state
});

export default rootReducer

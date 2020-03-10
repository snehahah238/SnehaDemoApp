import { combineReducers } from 'redux';
import masterReducer from './masterReducer';
import loginReducer from './loginReducer';

const rootReducer = combineReducers({
  master: masterReducer,
  loginReducer:loginReducer
});

export default rootReducer;

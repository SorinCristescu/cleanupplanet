import authReducer from './authReducer';
import initiativeReducer from './initiativeReducer';
import { combineReducers } from 'redux';

const rootReducer = combineReducers({
  auth: authReducer,
  initiative: initiativeReducer
});
export default rootReducer;

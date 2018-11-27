import authReducer from './authReducer';
import initiativeReducer from './initiativeReducer';
import dataReducer from './dataReducer';
import { combineReducers } from 'redux';
import { firestoreReducer } from 'redux-firestore';
import { firebaseReducer } from 'react-redux-firebase';

const rootReducer = combineReducers({
  auth: authReducer,
  initiative: initiativeReducer,
  data: dataReducer,
  firestore: firestoreReducer,
  firebase: firebaseReducer
});
export default rootReducer;

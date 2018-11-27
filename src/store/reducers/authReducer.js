import {
  LOGIN_SUCCESS,
  SIGNOUT_SUCCESS,
  SIGNUP_SUCCESS,
  SIGNUP_ERROR,
  LOGIN_ERROR
} from '../../constants';

const initState = {
  authError: null
};

const authReducer = (state = initState, action) => {
  switch (action.type) {
    case LOGIN_ERROR:
      return {
        ...state,
        authError: 'Login failed'
      };
    case LOGIN_SUCCESS:
      return {
        ...state,
        authError: null
      };
    case SIGNOUT_SUCCESS:
      return state;
    case SIGNUP_SUCCESS:
      return {
        ...state,
        authError: null
      };
    case SIGNUP_ERROR:
      return {
        ...state,
        authError: action.error.message
      };
    default:
      return state;
  }
};

export default authReducer;

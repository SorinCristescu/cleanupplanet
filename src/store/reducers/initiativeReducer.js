import { CREATE_INITIATIVE, CREATE_INITIATIVE_ERROR } from '../../constants';

const initState = {
  initiatives: []
};

const initiativeReducer = (state = initState, action) => {
  switch (action.type) {
    case CREATE_INITIATIVE:
      return state;
    case CREATE_INITIATIVE_ERROR:
      return state;
    default:
      return state;
  }
};

export default initiativeReducer;

import { FETCHING_DATA, FETCHING_DATA_ERROR } from '../../constants';

const initState = {
  data: []
};

const dataReducer = (state = initState, action) => {
  switch (action.type) {
    case FETCHING_DATA:
      return {
        ...state,
        locations: action.locations
      };
    case FETCHING_DATA_ERROR:
      return {
        ...state,
        fetchError: action.error.message
      };
    default:
      return state;
  }
};

export default dataReducer;

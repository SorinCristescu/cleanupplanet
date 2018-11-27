import axios from 'axios';
import { URL } from '../../config/apiConfig';
import { FETCHING_DATA, FETCHING_DATA_ERROR } from '../../constants';

export const getLocations = () => {
  return dispatch => {
    return axios
      .get(URL)
      .then(response => {
        dispatch({
          type: FETCHING_DATA,
          locations: response.data
        });
      })
      .catch(error => {
        dispatch({
          type: FETCHING_DATA_ERROR,
          error
        });
      });
  };
};

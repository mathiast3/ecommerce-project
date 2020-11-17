import { ADD_USER, FETCH_USER_ERROR, FETCH_USER_SUCCESS } from "./types";

/**
 * action creators for an individual user
 */
export const addUser = (data) => {
  return {
    type: ADD_USER,
    payload: data,
  };
};

export const fetchSuccess = () => {
  return {
    type: FETCH_USER_SUCCESS,
  };
};

export const fetchError = (err) => {
  return {
    type: FETCH_USER_ERROR,
    payload: err,
  };
};

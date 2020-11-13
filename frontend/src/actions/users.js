import { SET_USERS, FETCH_USERS_ERROR, FETCH_USERS_SUCCESS } from "./types";

export const setUsers = (data) => {
  return {
    type: SET_USERS,
    payload: data,
  };
};

export const fetchSuccess = () => {
  return {
    type: FETCH_USERS_SUCCESS,
  };
};

export const fetchError = (err) => {
  return {
    type: FETCH_USERS_ERROR,
    payload: err,
  };
};

import {
  ADD_TO_CART,
  FETCH_ERROR,
  GET_ALL_USERS,
  GET_USER_BY_ID,
} from "./types";

export const addToCart = (product) => {
  return {
    type: ADD_TO_CART,
    payload: product,
  };
};

export const fetchError = (error) => {
  return {
    type: FETCH_ERROR,
    payload: error,
  };
};

export const acAllUsers = (data) => {
  return {
    type: GET_ALL_USERS,
    payload: data,
  };
};

export const acAUserById = (data) => {
  return {
    type: GET_USER_BY_ID,
    payload: data,
  };
};

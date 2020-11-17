import {
  FETCH_PRODUCTS_ERROR,
  FETCH_PRODUCTS_SUCCESS,
  SET_PRODUCTS,
} from "./types";

/**
 * action creators for product management dashboard
 */
export const setProducts = (data) => {
  return {
    type: SET_PRODUCTS,
    payload: data,
  };
};

export const fetchSuccess = () => {
  return {
    type: FETCH_PRODUCTS_SUCCESS,
  };
};

export const fetchError = (err) => {
  return {
    type: FETCH_PRODUCTS_ERROR,
    payload: err,
  };
};

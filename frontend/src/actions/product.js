import {
  ADD_PRODUCT,
  FETCH_PRODUCT_ERROR,
  FETCH_PRODUCT_SUCCESS,
  UPDATE_PRODUCT_BY_ID,
  SET_PRODUCT_EDIT_ID,
  DELETE_PRODUCT_BY_ID,
} from "./types";

export const addProduct = (data) => {
  return {
    type: ADD_PRODUCT,
    payload: data,
  };
};

export const editProduct = (data) => {
  return {
    type: UPDATE_PRODUCT_BY_ID,
    payload: data,
  };
};

export const setProductEditId = (id) => {
  return {
    type: SET_PRODUCT_EDIT_ID,
    payload: id,
  };
};

export const deleteProduct = (id) => {
  return {
    type: DELETE_PRODUCT_BY_ID,
    payload: id,
  };
};

export const fetchSuccess = () => {
  return {
    type: FETCH_PRODUCT_SUCCESS,
  };
};

export const fetchError = (err) => {
  return {
    type: FETCH_PRODUCT_ERROR,
    payload: err,
  };
};

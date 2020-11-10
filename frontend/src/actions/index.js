import {
  ADD_TO_CART,
  FETCH_ERROR,
  GET_ALL_USERS,
  GET_USER_BY_ID,
  ADD_USER,
  UPDATE_USER,
  DELETE_USER_BY_ID,
  GET_ALL_PRODUCTS,
  ADD_PRODUCT,
  UPDATE_PRODUCT_BY_ID,
  DELETE_PRODUCT_BY_ID,
  DELETE_FROM_CART,
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

export const getUsers = (data) => {
  return {
    type: GET_ALL_USERS,
    payload: data,
  };
};

export const getUser = (data) => {
  return {
    type: GET_USER_BY_ID,
    payload: data,
  };
};

// need to update redux store?
export const deleteUser = () => {
  return {
    type: DELETE_USER_BY_ID,
  };
};

export const addUser = () => {
  //?
  return {
    type: ADD_USER,
  };
};

export const updateUser = () => {
  //?
  return {
    type: UPDATE_USER,
  };
};

export const getAllProducts = (data) => {
  return {
    type: GET_ALL_PRODUCTS,
    payload: data,
  };
};

export const addProduct = (data) => {
  //?
  return {
    type: ADD_PRODUCT,
    payload: data,
  };
};

export const updateProduct = () => {
  //?
  return {
    type: UPDATE_PRODUCT_BY_ID,
  };
};

export const deleteProduct = () => {
  //?
  return {
    type: DELETE_PRODUCT_BY_ID,
  };
};

export const deleteFromCart = (index) => {
  return {
    type: DELETE_FROM_CART,
    payload: index,
  };
};

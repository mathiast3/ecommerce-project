import { ADD_TO_CART, DELETE_FROM_CART, CLEAR_CART } from "./types";

/**
 * action creators for an individual cart
 */
export const addToCart = (product) => {
  return {
    type: ADD_TO_CART,
    payload: product,
  };
};

export const deleteFromCart = (index) => {
  return {
    type: DELETE_FROM_CART,
    payload: index,
  };
};

export const clearCart = () => {
  return {
    type: CLEAR_CART,
  };
};

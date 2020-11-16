import {
  SET_PRODUCTS,
  FETCH_PRODUCTS_ERROR,
  DELETE_PRODUCT_BY_ID,
} from "../actions/types";

const initialState = {
  allProducts: [],
  error: {},
};

const productReducer = (state = initialState, action) => {
  const { type, payload } = action;
  switch (type) {
    case SET_PRODUCTS:
      return {
        ...state,
        allProducts: payload,
      };

    case FETCH_PRODUCTS_ERROR:
      return {
        ...state,
        error: payload,
      };

    case DELETE_PRODUCT_BY_ID:
      let p;
      let index;
      for (p in state.allProducts) {
        if (state.allProducts[p].id === parseInt(payload)) index = p;
      }
      return {
        ...state,
        allProducts: [
          ...state.allProducts.slice(0, index),
          ...state.allProducts.slice(index + 1),
        ],
      };
    default:
      return state;
  }
};

export default productReducer;

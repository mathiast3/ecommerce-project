import { SET_PRODUCTS, FETCH_PRODUCTS_ERROR } from "../actions/types";

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

    default:
      return state;
  }
};

export default productReducer;

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
      console.log("pr", payload);
      let found = false;
      let index;
      while (!found) {
        let p;
        for (p in state.allProducts) {
          if (p.id === payload) {
            index = p;
            found = !found;
          }
          index++;
        }
      }
      console.log("reducer", index, payload);

      return {
        ...state,
        allProducts: state.allProducts.splice(index, 1),
      };
    default:
      return state;
  }
};

export default productReducer;

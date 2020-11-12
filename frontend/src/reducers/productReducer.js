import { GET_PRODUCTS } from "../actions/types";

const initialState = {
  products: [],
};

const productReducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_PRODUCTS:
      return {
        ...state,
        products: action.payload,
      };

    // DELETE_USER_BY_ID, UPDATE_USER, ADD_USER?
    // ADD_PRODUCT, UPDATE/DELETE PRODUCT BY ID?

    default:
      return state;
  }
};

export default productReducer;

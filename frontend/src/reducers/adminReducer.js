import { GET_ALL_USERS, GET_PRODUCTS } from "../actions/types";

const initialState = {
  customers: [],
  products: [],
};

const adminReducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_ALL_USERS:
      return {
        ...state,
        customers: action.payload,
      };

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

export default adminReducer;

import { GET_ALL_USERS } from "../actions/types";

const initialState = {
  customers: [],
  products: [],
};

const adminReducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_ALL_USERS:
      return { ...state, list: action.payload };
    default:
      return state;
  }
};

export default adminReducer;

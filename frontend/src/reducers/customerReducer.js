import { GET_ALL_USERS } from "../actions/types";

const initialState = {
  list: [],
  userId: -1,
  firstName: "",
  lastName: "",
  email: "",
  password: "",
  isAdmin: false,
};

const cartReducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_ALL_USERS:
      return { ...state, list: action.payload };
    default:
      return state;
  }
};

export default cartReducer;

import { GET_USER_BY_ID } from "../actions/types";

const initialState = {
  userId: -1,
  firstName: "",
  lastName: "",
  email: "",
  password: "",
  isAdmin: false,
};

const cartReducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_USER_BY_ID:
      const payload = action.payload;
      return {
        ...state,
        userId: payload.id,
        firstName: payload.name,
        email: payload.email,
        isAdmin: true,
      };
    default:
      return state;
  }
};

export default cartReducer;

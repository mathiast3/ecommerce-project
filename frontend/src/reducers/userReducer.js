import { GET_USER_BY_ID, SET_IS_ADMIN } from "../actions/types";

const initialState = {
  userId: -1,
  firstName: "",
  lastName: "",
  email: "",
  password: "",
  isAdmin: true,
};

const userReducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_USER_BY_ID:
      const payload = action.payload;

      return {
        ...state,
        userId: payload.userId,
        firstName: payload.firstName,
        lastName: payload.lastName,
        email: payload.email,
        //isAdmin: payload.role !== "ROLE_USER",
      };

    case SET_IS_ADMIN:
      return {
        ...state,
        isAdmin: action.payload,
      };

    default:
      return state;
  }
};

export default userReducer;

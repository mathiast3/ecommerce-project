import {
  GET_USER_BY_ID,
  SET_IS_ADMIN,
  LOGIN_SUCCESS,
  LOG_OUT,
} from "../actions/types";

const initialState = {
  userId: -1,
  firstName: "",
  lastName: "",
  email: "",
  password: "",
  isAdmin: false,
};

const userReducer = (state = initialState, action) => {
  switch (action.type) {
    // case GET_USER_BY_ID:
    //   const payload = action.payload;

    //   return {
    //     ...state,
    //     userId: payload.userId,
    //     firstName: payload.firstName,
    //     lastName: payload.lastName,
    //     email: payload.email,
    //     //isAdmin: payload.role !== "ROLE_USER",
    //   };

    case SET_IS_ADMIN:
      return {
        ...state,
        isAdmin: action.payload,
      };

    case LOGIN_SUCCESS:
      const p = action.payload;
      return {
        ...state,
        userId: p.userId,
        firstName: p.firstName,
        lastName: p.lastName,
        email: p.email,
        password: p.password,
        isAdmin: p.role === "ROLE_USER", // fix to !== later
      };

    case LOG_OUT:
      return initialState;
    default:
      return state;
  }
};

export default userReducer;

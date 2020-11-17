import {
  GET_ALL_USERS,
  GET_PRODUCTS,
  LOGIN_SUCCESS,
  LOG_OUT,
  SET_DATA_LOADED,
  REGISTER_SUCCESS,
} from "../actions/types";

const initialState = {
  loggedIn: false,
  dataLoaded: false,
  registered: false,
};

const authReducer = (state = initialState, action) => {
  const { type, payload } = action;
  switch (type) {
    case SET_DATA_LOADED:
      return {
        ...state,
        dataLoaded: payload,
      };

    case REGISTER_SUCCESS:
      return {
        ...state,
        registered: true,
      };

    case LOGIN_SUCCESS:
      return {
        ...state,
        loggedIn: true,
        registered: true,
      };

    case LOG_OUT:
      return initialState;

    default:
      return state;
  }
};

export default authReducer;

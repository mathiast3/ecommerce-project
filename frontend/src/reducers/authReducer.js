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
  // isAdmin: true,
};

/*
  products: [
    {
        "productName": "",
        "productCategory": "",
        "productCondition": "",
        imageUrl": "",
        "price": 1.23
    }
  ]
*/
const authReducer = (state = initialState, action) => {
  const { type, payload } = action;
  switch (type) {
    case SET_DATA_LOADED:
      return {
        ...state,
        dataLoaded: payload,
      };
    // case SET_IS_ADMIN:
    //   return {
    //     ...state,
    //     isAdmin: action.payload,
    //   };
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
      // return {
      //   ...state,
      //   loggedIn: false,
      //   registered: false,
      // };
      return initialState;

    // DELETE_USER_BY_ID, UPDATE_USER, ADD_USER?
    // ADD_PRODUCT, UPDATE/DELETE PRODUCT BY ID?

    default:
      return state;
  }
};

export default authReducer;

import {
  GET_ALL_USERS,
  GET_PRODUCTS,
  LOGIN_SUCCESS,
  LOG_OUT,
  SET_DATA_LOADED,
  REGISTER_SUCCESS,
} from "../actions/types";

const initialState = {
  customers: [],
  products: [],
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
const adminReducer = (state = initialState, action) => {
  const { type, payload } = action;
  switch (type) {
    case GET_ALL_USERS:
      return {
        ...state,
        customers: payload,
      };

    case GET_PRODUCTS:
      return {
        ...state,
        products: payload,
      };

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
      };

    case LOG_OUT:
      return {
        ...state,
        loggedIn: false,
        registered: false,
      };

    // DELETE_USER_BY_ID, UPDATE_USER, ADD_USER?
    // ADD_PRODUCT, UPDATE/DELETE PRODUCT BY ID?

    default:
      return state;
  }
};

export default adminReducer;

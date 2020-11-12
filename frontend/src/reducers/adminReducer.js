import {
  GET_ALL_USERS,
  GET_PRODUCTS,
  LOGIN_SUCCESS,
  LOG_OUT,
  SET_DATA_LOADED,
} from "../actions/types";

const initialState = {
  customers: [],
  products: [],
  loggedIn: true,
  dataLoaded: false,
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

    case SET_DATA_LOADED:
      return {
        ...state,
        dataLoaded: action.payload,
      };
    // case SET_IS_ADMIN:
    //   return {
    //     ...state,
    //     isAdmin: action.payload,
    //   };

    case LOGIN_SUCCESS:
      return {
        ...state,
        loggedIn: true,
      };

    case LOG_OUT:
      return {
        ...state,
        loggedIn: false,
      };

    // DELETE_USER_BY_ID, UPDATE_USER, ADD_USER?
    // ADD_PRODUCT, UPDATE/DELETE PRODUCT BY ID?

    default:
      return state;
  }
};

export default adminReducer;

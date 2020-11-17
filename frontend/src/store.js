import { configureStore } from "@reduxjs/toolkit";
import cartReducer from "./reducers/cartReducer";
import userReducer from "./reducers/userReducer";
import authReducer from "./reducers/authReducer";
import productReducer from "./reducers/productReducer";
import customersReducer from "./reducers/customersReducer";

// if nesting reducers, call combineReducers

/**
 * configureStore
 *      calls applyMiddleware and compose automatically
 *      enables Redux DevTools Extension automatically
 *      adds some middleware by default (i.e. redux-thunk for sync and async logic)
 */
const store = configureStore({
  reducer: {
    auth: authReducer,
    cart: cartReducer,
    user: userReducer,
    products: productReducer,
    customers: customersReducer,
  },
});

export default store;

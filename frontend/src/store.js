import { configureStore } from "@reduxjs/toolkit";
import cartReducer from "./reducers/cartReducer";
import userReducer from "./reducers/userReducer";
import adminReducer from "./reducers/adminReducer";
// import productReducer from "./reducers/productReducer";

// if nesting reducers, call combineReducers

/**
 * configureStore
 *      calls applyMiddleware and compose automatically
 *      enables Redux DevTools Extension automatically
 *      adds some middleware by default (i.e. redux-thunk for sync and async logic)
 */
const store = configureStore({
  reducer: {
    admin: adminReducer,
    cart: cartReducer,
    user: userReducer,
    // product: productReducer,
  },
});

export default store;

import { configureStore } from "@reduxjs/toolkit";
import cartReducer from "./reducers/cartReducer";
import customerReducer from "./reducers/customerReducer";
import adminReducer from "./reducers/adminReducer";

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
    customer: customerReducer,
  },
});

export default store;

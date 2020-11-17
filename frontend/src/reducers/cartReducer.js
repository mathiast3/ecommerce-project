import {
  ADD_TO_CART,
  DELETE_FROM_CART,
  CLEAR_CART,
  ADD_TRANSACTION,
} from "../actions/types";

const initialState = {
  items: [],
  total: 0,
};

const cartReducer = (state = initialState, action) => {
  const { type, payload } = action;
  let p, index;

  switch (type) {
    case ADD_TO_CART:
      return {
        ...state,
        items: state.items.concat(payload),
        total: state.total + payload.price,
      };

    case DELETE_FROM_CART:
      return {
        ...state,
        items: state.items.filter((item, index) => index !== parseInt(payload)),
        total: state.total - payload.price,
      };

    case ADD_TRANSACTION:
      return initialState;

    case CLEAR_CART:
      return initialState;
    default:
      return state;
  }
};

export default cartReducer;

import { ADD_TO_CART } from "../actions/types";

const initialState = {
  items: [],
  total: 0,
};

const cartReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_TO_CART:
      return {
        ...state,
        items: state.items.push(action.payload),
      };

    default:
      return state;
  }
};

export default cartReducer;

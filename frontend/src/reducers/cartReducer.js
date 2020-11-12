import { ADD_TO_CART, DELETE_FROM_CART } from "../actions/types";

const initialState = {
  items: [],
  total: 0,
};

const cartReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_TO_CART:
      let priceAdd = action.payload.price;
      return {
        ...state,
        items: state.items.push(action.payload),
        total: state.total + priceAdd,
      };

    case DELETE_FROM_CART:
      let index = action.payload;
      let priceDel = state.items[index].price;
      return {
        ...state,
        items: state.items.splice(index, 1),
        total: state.total - priceDel,
      };

    default:
      return state;
  }
};

export default cartReducer;

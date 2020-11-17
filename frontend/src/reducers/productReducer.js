import {
  SET_PRODUCTS,
  FETCH_PRODUCTS_ERROR,
  DELETE_PRODUCT_BY_ID,
  UPDATE_PRODUCT_BY_ID,
  SET_PRODUCT_EDIT_ID,
  ADD_PRODUCT,
  LOG_OUT,
} from "../actions/types";

// future work: set product index for any edit/delete action, for easy state manipulation
const initialState = {
  allProducts: [],
  productEditId: -1,
  // productIndex: -1,
  error: {},
};

const productReducer = (state = initialState, action) => {
  const { type, payload } = action;
  let p, index;

  switch (type) {
    case SET_PRODUCTS:
      return {
        ...state,
        allProducts: payload,
      };

    case FETCH_PRODUCTS_ERROR:
      return {
        ...state,
        error: payload,
      };

    case ADD_PRODUCT:
      return {
        ...state,
        allProducts: state.allProducts.concat(payload),
      };

    case DELETE_PRODUCT_BY_ID:
      for (p in state.allProducts) {
        if (state.allProducts[p].id === parseInt(payload)) index = p;
      }
      return {
        ...state,
        allProducts: [
          ...state.allProducts.slice(0, index),
          ...state.allProducts.slice(index + 1),
        ],
      };

    case SET_PRODUCT_EDIT_ID:
      return {
        ...state,
        productEditId: payload,
      };

    case UPDATE_PRODUCT_BY_ID:
      return {
        ...state,
        allProducts: state.allProducts.map((product, i) =>
          i === parseInt(payload.index)
            ? {
                ...product,
                productName: payload.productName,
                image: payload.image,
                productCategory: payload.productCategory,
                productCondition: payload.productCondition,
                price: payload.price,
              }
            : product
        ),
      };

    case LOG_OUT:
      return {
        ...state,
        productEditId: -1,
        error: {},
      };
    default:
      return state;
  }
};

export default productReducer;

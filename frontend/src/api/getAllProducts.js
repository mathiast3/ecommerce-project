import axios from "axios";
import { URI } from "../constants/index";
import { setProducts, fetchError, fetchSuccess } from "../actions/products";

export const getAllProducts = () => async (dispatch) => {
  const src = `${URI}/products`;
  return await axios
    .get(src)
    .then((response) => response.data)
    .then((data) => {
      dispatch(setProducts(data));
      dispatch(fetchSuccess());
    })
    .catch((error) => dispatch(fetchError(error)));
};

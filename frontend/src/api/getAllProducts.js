import axios from "axios";
import { URI } from "../constants/index";
import { setProducts, fetchError, fetchSuccess } from "../actions/products";

export const setAllProducts = () => async (dispatch) => {
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

export const getAllProducts = () => {
  const src = `${URI}/products`;
  return axios
    .get(src)
    .then((response) => response.data)
    .catch((error) => console.log(error));
};

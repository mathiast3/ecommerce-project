import axios from "axios";
import { getProducts, fetchError } from "../actions/index";
import { URI } from "../constants/index";

const getAllProducts = () => async (dispatch) => {
  const src = `${URI}/products`;
  return await axios
    .get(src)
    .then((response) => response.data)
    .then((data) => dispatch(getProducts(data)))
    .catch((error) => dispatch(fetchError(error)));
};

export default getAllProducts;

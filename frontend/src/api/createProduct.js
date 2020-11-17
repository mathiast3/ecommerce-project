import axios from "axios";
import { addProduct, fetchError } from "../actions/index";
import { URI_ADD } from "../constants/uriRoutes";

const createProduct = (data) => async (dispatch) => {
  const src = `${URI_ADD}/product`;
  return await axios
    .post(src, data)
    .then((response) => response.data)
    .then((data) => dispatch(addProduct(data)))
    .catch((error) => dispatch(fetchError(error)));
};

export default createProduct;

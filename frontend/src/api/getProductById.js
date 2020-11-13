import axios from "axios";
import { getProduct, fetchError } from "../actions/index";
import { URI } from "../constants/index";

const getProductById = (id) => async (dispatch) => {
  const src = `${URI}/product/${id}`;
  return await axios
    .get(src)
    .then((response) => response.data)
    //.then((data) => dispatch(getProduct(data)))
    .catch((error) => dispatch(fetchError(error)));
};

export default getProductById;

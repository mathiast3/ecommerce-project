import axios from "axios";
import { addTransaction, fetchError } from "../actions/index";
import { URI_ADD } from "../constants/uriRoutes";

const createTransaction = (data) => async (dispatch) => {
  const src = `${URI_ADD}/transaction`;
  return await axios
    .post(src, data)
    .then((response) => response.data)
    .then((data) => dispatch(addTransaction(data)))
    .catch((error) => dispatch(fetchError(error)));
};

export default createTransaction;

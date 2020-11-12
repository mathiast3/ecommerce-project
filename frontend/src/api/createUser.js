import axios from "axios";
import { addUser, fetchError } from "../actions/index";
import { URI_ADD } from "../constants/index";

const createUser = (data) => async (dispatch) => {
  const src = `${URI_ADD}/user`;
  return await axios
    .post(src, data)
    .then((response) => response.data)
    .then((data) => dispatch(addUser(data)))
    .catch((error) => dispatch(fetchError(error)));
};

export default createUser;

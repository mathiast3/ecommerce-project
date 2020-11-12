import axios from "axios";
import { deleteUser, fetchError } from "../actions/index";
import { URI_DEL } from "../constants/index";

const deleteUserById = (id) => async (dispatch) => {
  const src = `${URI_DEL}/user/${id}`;
  return await axios
    .get(src)
    .then((response) => response.data)
    .then(() => dispatch(deleteUser()))
    .catch((error) => dispatch(fetchError(error)));
};

export default deleteUserById;

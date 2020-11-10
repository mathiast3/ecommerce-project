import axios from "axios";
import { deleteUser, fetchError } from "../actions/index";

// is this right?
const deleteUserById = (id) => async (dispatch) => {
  const src = `https://jsonplaceholder.typicode.com/users/${id}`;
  return await axios
    .delete(src)
    .then((response) => response.data)
    .then(() => dispatch(deleteUser()))
    .catch((error) => dispatch(fetchError(error)));
};

export default deleteUserById;

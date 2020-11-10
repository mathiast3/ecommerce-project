import axios from "axios";
import { getUser, fetchError } from "../actions/index";

const getUserById = (id) => async (dispatch) => {
  const src = `https://jsonplaceholder.typicode.com/users/${id}`;
  return await axios
    .get(src)
    .then((response) => response.data)
    .then((data) => dispatch(getUser(data)))
    .catch((error) => dispatch(fetchError(error)));
};

export default getUserById;

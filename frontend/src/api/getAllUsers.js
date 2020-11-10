import axios from "axios";
import { getUsers, fetchError } from "../actions/index";

const getAllUsers = () => async (dispatch) => {
  const src = "https://jsonplaceholder.typicode.com/users";
  return await axios
    .get(src)
    .then((response) => response.data)
    .then((data) => dispatch(getUsers(data)))
    .catch((error) => dispatch(fetchError(error)));
};

export default getAllUsers;

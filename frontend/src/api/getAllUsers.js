import axios from "axios";
import { acAllUsers, fetchError } from "../actions/index";

const getAllUsers = () => async (dispatch) => {
  const src = "https://jsonplaceholder.typicode.com/users";
  return await axios
    .get(src)
    .then((response) => response.data)
    .then((data) => dispatch(acAllUsers(data)))
    .catch((error) => dispatch(fetchError(error)));
};

export default getAllUsers;

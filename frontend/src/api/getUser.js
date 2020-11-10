import axios from "axios";
import { acAllUsers } from "../actions/index";

export const getUserById = (id) => async (dispatch) => {
  const GET_USER = "https://jsonplaceholder.typicode.com/users/{id}";
  return await axios
    .get(GET_USER)
    .then((response) => response.data)
    .then((data) => dispatch(acAllUsers(data)))
    .catch((error) => console.error(error));
};

export default getAllUsers;

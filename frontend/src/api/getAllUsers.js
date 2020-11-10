import axios from "axios";
import { acAllUsers } from "../actions/index";

export const getAllUsers = () => async (dispatch) => {
  const GET_USER = "https://jsonplaceholder.typicode.com/users";
  return await axios
    .get(GET_USER)
    .then((response) => response.data)
    .then((data) => dispatch(acAllUsers(data)))
    .catch((error) => console.error(error));
};

export default getAllUsers;

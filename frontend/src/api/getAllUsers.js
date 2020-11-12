import axios from "axios";
import { getUsers, fetchError } from "../actions/index";
import { URI } from "../constants/index";

const getAllUsers = () => async (dispatch) => {
  const src = `${URI}/allUsers`;
  return await axios
    .get(src)
    .then((response) => response.data)
    .then((data) => dispatch(getUsers(data)))
    .catch((error) => dispatch(fetchError(error)));
};

export default getAllUsers;

import axios from "axios";
import { getUsers, fetchError } from "../actions/index";
import { URI } from "../constants/index";

export const getAllUsers = () => async (dispatch) => {
  const src = `${URI}/allUsers`;
  return await axios
    .get(src)
    .then((response) => response.data)
    .then((data) => dispatch(getUsers(data)))
    .catch((error) => dispatch(fetchError(error)));
};

export default getAllUsers;

export const getAllUsersWORedux = () => {
  const src = `${URI}/allUsers`;
  return axios
    .get(src)
    .then((response) => response.data)
    .catch((error) => console.log(error));
};

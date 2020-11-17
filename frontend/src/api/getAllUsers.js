import axios from "axios";
import { setUsers, fetchError, fetchSuccess } from "../actions/users";
import { URI } from "../constants/uriRoutes";
import { USERS_DATA } from "../constants/sampleData";

export const setAllUsers = () => async (dispatch) => {
  const src = `${URI}/allUsers`;
  return await axios
    .get(src)
    .then((response) => response.data)
    .then((data) => {
      dispatch(setUsers(data));
      dispatch(fetchSuccess());
    })
    .catch((error) => dispatch(fetchError(error)));
};

// export const getAllUsers = () => {
//   const src = `${URI}/allUsers`;
//   return axios
//     .get(src)
//     .then((response) => response.data)
//     .catch((error) => console.log(error));
// };

export const getAllUsers = () => async (dispatch) => {
  dispatch(setUsers(USERS_DATA));
  return USERS_DATA;
};

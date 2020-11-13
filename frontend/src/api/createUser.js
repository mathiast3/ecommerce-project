import axios from "axios";
import { addUser, fetchError } from "../actions/user";
import { URI_ADD } from "../constants/index";

export const createUser = (data) => async (dispatch) => {
  const src = `${URI_ADD}/user`;
  return await axios
    .post(src, data)
    .then((response) => response.data)
    .then((data) => {
      dispatch(addUser(data));
    })
    .catch((error) => dispatch(fetchError(error)));
};

export const createUserWORedux = (data) => {
  const src = `${URI_ADD}/user`;
  return (
    axios
      .post(src, data)
      //.then((response) => console.log(response))
      .then((response) => response.data)
      .catch((error) => console.log(error))
  );
};

import axios from "axios";
import { getUser, fetchError } from "../actions/index";
import { URI } from "../constants/index";

const getUserById = (id) => async (dispatch) => {
  const src = `${URI}/user/${id}`;
  return await axios
    .get(src)
    .then((response) => response.data)
    .then((data) => dispatch(getUser(data)))
    .catch((error) => dispatch(fetchError(error)));
};

export default getUserById;

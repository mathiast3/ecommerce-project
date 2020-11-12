import { LOGIN_SUCCESS, LOGIN_ERROR, LOG_OUT } from "./types";
import { getAllUsersWORedux } from "../api/getAllUsers";

export const loginUser = ({ email, password }) => async (dispatch) => {
  try {
    let allUsers = await getAllUsersWORedux();
    let found = false;
    let user;

    while (!found) {
      let u;
      for (u in allUsers) {
        if (allUsers[u].email === email && allUsers[u].password === password) {
          found = !found;
          user = allUsers[u];
        }
      }
    }

    found
      ? dispatch(setLoginSuccess(user))
      : dispatch(setLoginError("User not found"));
  } catch (err) {
    dispatch(setLoginError(err));
  }
};

export const logoutUser = () => async (dispatch) => {
  dispatch({
    type: LOG_OUT,
  });
};

const setLoginSuccess = (data) => {
  return {
    type: LOGIN_SUCCESS,
    payload: data,
  };
};

const setLoginError = (err) => {
  return {
    type: LOGIN_ERROR,
    payload: err,
  };
};

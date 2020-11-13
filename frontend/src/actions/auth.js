import {
  LOGIN_SUCCESS,
  LOGIN_ERROR,
  LOG_OUT,
  REGISTER_SUCCESS,
  REGISTER_ERROR,
} from "./types";
import { getAllUsersWORedux } from "../api/getAllUsers";
import { createUserWORedux } from "../api/createUser";

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

// future work: validation the user does not already exist
export const registerUser = ({
  firstName,
  lastName,
  email,
  username,
  password,
}) => async (dispatch) => {
  try {
    let newUser = await createUserWORedux({
      firstName,
      lastName,
      email,
      username,
      password,
    });
    if (newUser) {
      dispatch(setRegisterSuccess());
      dispatch(setLoginSuccess(newUser));
    } else {
      dispatch(setRegisterError("Unable to register user"));
    }
  } catch (err) {
    dispatch(setRegisterError(err));
  }
};

export const logoutUser = () => {
  return {
    type: LOG_OUT,
  };
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

const setRegisterSuccess = () => {
  return {
    type: REGISTER_SUCCESS,
  };
};

const setRegisterError = (err) => {
  return {
    type: REGISTER_ERROR,
    payload: err,
  };
};

import {
  LOGIN_SUCCESS,
  LOGIN_ERROR,
  LOG_OUT,
  REGISTER_SUCCESS,
  REGISTER_ERROR,
} from "./types";
import { getAllUsers } from "../api/getAllUsers";
import { createUserWORedux } from "../api/createUser";
import { LOGIN_DATA, USERS_DATA } from "../constants/sampleData";

export const loginUser = ({ email, password }) => async (dispatch) => {
  try {
    // API
    //let allUsers = await getAllUsers();
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

    // without API + backend server connectivity
    let allUsers = USERS_DATA;
    let found = true;
    user = LOGIN_DATA;

    found
      ? dispatch(loginSuccess(user))
      : dispatch(loginError("User not found"));
  } catch (err) {
    dispatch(loginError(err));
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
      dispatch(registerSuccess());
      dispatch(loginSuccess(newUser));
    } else {
      dispatch(registerError("Unable to register user"));
    }
  } catch (err) {
    dispatch(registerError(err));
  }
};

export const logoutUser = () => {
  return {
    type: LOG_OUT,
  };
};

const loginSuccess = (data) => {
  return {
    type: LOGIN_SUCCESS,
    payload: data,
  };
};

const loginError = (err) => {
  return {
    type: LOGIN_ERROR,
    payload: err,
  };
};

const registerSuccess = () => {
  return {
    type: REGISTER_SUCCESS,
  };
};

const registerError = (err) => {
  return {
    type: REGISTER_ERROR,
    payload: err,
  };
};

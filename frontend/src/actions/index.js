import {
  ADD_TO_CART,
  FETCH_ERROR,
  FETCH_START,
  FETCH_SUCCESS,
  LOAD_DATA,
  GET_ALL_USERS,
} from "./types";
//import { getAllUsers } from "../api/index";
import getAllUsers from "../api/getAllUsers";

export const addToCart = (product) => {
  return {
    type: ADD_TO_CART,
    payload: product,
  };
};

export const fetchStart = () => {
  return {
    type: FETCH_START,
  };
};

export const fetchSuccess = () => {
  return {
    type: FETCH_SUCCESS,
  };
};

export const fetchError = (error) => {
  return {
    type: FETCH_ERROR,
    payload: error,
  };
};

export const loadData = (type, data) => {
  return {
    type: type,
    payload: data,
  };
};

/*
export const fetchData = () => {
  return async (dispatch) => {
    dispatch(getAllUsers());

    try {
      const data = await fetchWhat();
      dispatch(loadData(data));
      dispatch(fetchSuccess());
    } catch (error) {
      dispatch(fetchError(error));
    }
  };
};*/

// export const axiosAllUsers = () => {
//   console.log("pre return");
//   return async (dispatch) => {
//     console.log("pre try");
//     try {
//       console.log("in try");
//       const data = await getAllUsers();
//       console.log("after await");
//       dispatch(loadData(GET_ALL_USERS, data));
//       dispatch(fetchSuccess());
//     } catch (error) {
//       console.log("error?");
//       dispatch(fetchError(error));
//     }
//   };
// };

export const acAllUsers = (data) => {
  console.log(data);
  return {
    type: GET_ALL_USERS,
    payload: data,
  };
};

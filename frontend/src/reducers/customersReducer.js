import { SET_USERS } from "../actions/types";

const initialState = { allUsers: [] };

const customersReducer = (state = initialState, action) => {
  const { type, payload } = action;

  switch (type) {
    case SET_USERS:
      return {
        ...state,
        allUsers: payload,
      };
    default:
      return state;
  }
};
export default customersReducer;

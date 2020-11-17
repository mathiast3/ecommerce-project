import { ADD_TRANSACTION } from "./types";

// to do: payload will be the order info
export const addTransaction = () => {
  return {
    type: ADD_TRANSACTION,
  };
};

import { ADD_TRANSACTION } from "./types";

/**
 * action creators for an individual transaction
 * ex. items ordered, total, user, billing or shipping address
 */

// to do: payload will be the order info
export const addTransaction = () => {
  return {
    type: ADD_TRANSACTION,
  };
};

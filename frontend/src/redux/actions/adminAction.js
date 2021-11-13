import { SET_VIEW } from "../types";

export const changeView = (payload) => {
  return {
    type: SET_VIEW,
    payload,
  };
};

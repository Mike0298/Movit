import CallApi from "../../apis/CallApi";
import { SET_VIEW, FETCH_USERS, ADMIN_LOADING } from "../types";

export const changeView = (payload) => {
  return {
    type: SET_VIEW,
    payload,
  };
};

export const fetchUser = () => {
  return async (dispatch) => {
    dispatch({
      type: ADMIN_LOADING,
    });
    const res = await CallApi("profile", "GET", null);
    dispatch({
      type: FETCH_USERS,
      payload: res.data,
    });
  };
};

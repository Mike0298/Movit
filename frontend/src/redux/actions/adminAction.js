import CallApi from "../../apis/CallApi";
import axios from "axios";

import {
  SET_VIEW,
  FETCH_USERS,
  ADMIN_LOADING,
  MOD_IFY,
  UNMOD_IFY,
} from "../types";

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

export const modUser = (profileId, userId) => async (dispatch) => {
  try {
    // const res = await axios.put(
    //   `https://movit-api.herokuapp.com/api/users/${userId}/mod`
    // );
    dispatch({
      type: MOD_IFY,
      payload: profileId,
    });
  } catch (err) {
    console.log(err.response.data);
  }
};

export const unModUser = (profileId, userId) => async (dispatch) => {
  try {
    // const res = await axios.put(
    //   `https://movit-api.herokuapp.com/api/users/${userId}/unmod`
    // );
    dispatch({
      type: UNMOD_IFY,
      payload: profileId,
    });
  } catch (err) {
    console.log(err.response.data);
  }
};

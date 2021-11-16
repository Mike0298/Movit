import axiosConfig from "../../apis/axiosConfig";
import {
  SET_USER,
  LOADING_USER,
  SET_AUTHENTICATED,
  SET_UNAUTHENTICATED,
  FINISH_LOADING_USER,
} from "../types";
export const setAuthourizationHeader = (token) => {
  localStorage.setItem("x-auth-token", token);
  axiosConfig.defaults.headers.common["x-auth-token"] = token;
};

export const registerUser = (userData, history) => async (dispatch) => {
  try {
    dispatch({
      type: LOADING_USER,
    });
    const { name, email, password, favGenres } = userData;

    let res = await axiosConfig.post("users/register", {
      name,
      email,
      password,
    });
    setAuthourizationHeader(res.data.token);
    await axiosConfig.post("https://movit-api.herokuapp.com/api/profile/", {
      favGenres,
    });
    await dispatch(getUserData());
    dispatch({
      type: SET_AUTHENTICATED,
    });
    history.push("/");
  } catch (err) {
    console.log(err);
    dispatch({
      type: FINISH_LOADING_USER,
    });
  }
};

export const loginUser = (userData, history) => async (dispatch) => {
  try {
    dispatch({
      type: LOADING_USER,
    });
    const res = await axiosConfig.post("users/login", userData);
    setAuthourizationHeader(res.data.token);
    await dispatch(getUserData());
    dispatch({
      type: SET_AUTHENTICATED,
    });
    history.push("/");
  } catch (err) {
    console.log(err.response);
    if (err.response.data.error) alert(err.response.data.error);
    dispatch({
      type: FINISH_LOADING_USER,
    });
  }
};

export const getUserData = () => async (dispatch) => {
  try {
    const res = await axiosConfig.get("profile/me");
    dispatch({
      type: SET_USER,
      payload: res.data,
    });
  } catch (err) {
    console.log(err);
  }
};

export const logoutUser = () => (dispatch) => {
  localStorage.removeItem("x-auth-token");
  dispatch({
    type: SET_UNAUTHENTICATED,
  });
};

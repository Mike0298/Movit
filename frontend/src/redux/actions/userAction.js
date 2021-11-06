import axios from "axios";
import {
  SET_USER,
  SET_ERRORS,
  SET_MESSAGES,
  LOADING_UI,
  LOADING_USER,
  SET_AUTHENTICATED,
  SET_UNAUTHENTICATED,
  CLEAR_ERRORS,
  CLEAR_MESSAGES,
} from "../types";

const setAuthourizationHeader = (token) => {
  localStorage.setItem("x-auth-token", token);
  axios.defaults.headers.common["Authorization"] = token;
};

export const loginUser = (userData, history) => (dispatch) => {
  dispatch({ type: LOADING_UI });
  axios
    .post("https://movit-api.herokuapp.com/api/users/login", userData)
    .then((res) => {
      setAuthourizationHeader(res.data.token);
      dispatch({ type: CLEAR_ERRORS });
      history.push("/");
    })
    .catch((err) => {
      dispatch({
        type: SET_ERRORS,
        payload: err.payload.data,
      });
    });
};

export const registerUser = (userData, history) => (dispatch) => {
  dispatch({ type: LOADING_UI });
};

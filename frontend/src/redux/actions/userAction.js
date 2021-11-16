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
export const setAuthourizationHeader = (token) => {
    localStorage.setItem("x-auth-token", token);
    axios.defaults.headers.common["x-auth-token"] = token;
};
// export const registerUser = (userData, history) => {
//   axios
//     .post("https://movit-api.herokuapp.com/api/users/register", userData)
//     .then((res) => {
//       console.log("sign up success")
//       setAuthourizationHeader(res.data.token);
//       history.push("/");
//     })
//     .catch((err) => {
//       console.log(err)
//     });
// };

export const registerUser = (userData, history) => (dispatch) => {
    console.log(userData);
};

export const loginUser = (userData, history) => async (dispatch) => {
    try {
        dispatch({
            type: LOADING_USER,
        });
        const res = await axios.post(
            "https://movit-api.herokuapp.com/api/users/login",
            userData
        );
        setAuthourizationHeader(res.data.token);
        await dispatch(getUserData());
        dispatch({
            type: SET_AUTHENTICATED,
        });
        history.push("/");
    } catch (err) {
        console.log(err);
    }
};

export const getUserData = () => async (dispatch) => {
    try {
        const res = await axios.get(
            "https://movit-api.herokuapp.com/api/profile/me"
        );
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

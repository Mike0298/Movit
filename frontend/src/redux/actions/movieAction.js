import CallApi from "../../apis/CallApi";
import { GET_MOVIES, GET_MOVIE, LOADING_DATA, ADD_COMMENT } from "../types";

export const actFetchMovies = () => {
    return async (dispatch) => {
        const res = await CallApi("movies", "GET", null);
        dispatch({ type: LOADING_DATA });
        dispatch(GetMovies(res.data));
    };
};

export const actAddComment = (input) => {
    return (dispatch) => {
        dispatch(AddComment(input));
    };
};

export const GetMovies = (payload) => {
    return {
        type: GET_MOVIES,
        payload,
    };
};

export const AddComment = (payload) => {
    return {
        type: ADD_COMMENT,
        payload,
    };
};

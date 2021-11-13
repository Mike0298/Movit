import CallApi from "../../apis/CallApi";
import {
    GET_MOVIES,
    GET_MOVIE,
    LOADING_DATA,
    ADD_COMMENT,
    GET_RANDOM_MOVIE,
} from "../types";

export const actFetchMovies = () => {
    return async (dispatch) => {
        const res = await CallApi("movies", "GET", null);
        dispatch({ type: LOADING_DATA });
        dispatch(GetMovies(res.data));
    };
};

export const actRandomMovie = () => {
    return async (dispatch) => {
        const res = await CallApi("movies/get/random", "GET", null);
        dispatch({ type: LOADING_DATA });
        dispatch(GetRandomMovie(res.data));
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

export const GetRandomMovie = (payload) => {
    return {
        type: GET_RANDOM_MOVIE,
        payload,
    };
};

export const AddComment = (payload) => {
    return {
        type: ADD_COMMENT,
        payload,
    };
};

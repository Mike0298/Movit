import axios from "axios";
import CallApi from "../../apis/CallApi";
import {
    GET_MOVIES,
    GET_MOVIE,
    LOADING_DATA,
    ADD_COMMENT,
    GET_RANDOM_MOVIE,
    GET_MOVIES_BY_GENRE,
    DELETE_MOVIE,
    LIKE_MOVIE,
    UNLIKE_MOVIE,
} from "../types";
import { setAuthourizationHeader } from "./userAction";

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

export const actGetMoviesByGenre = (genre) => {
    if (genre) {
        return async (dispatch) => {
            const res = await CallApi(`movies/genres/${genre}`, "GET", null);
            dispatch({ type: LOADING_DATA });
            dispatch(GetRandomMovie(res.data));
        };
    }
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

export const GetMoviesByGenre = (payload) => {
    return {
        type: GET_MOVIES_BY_GENRE,
        payload,
    };
};

export const AddComment = (payload) => {
    return {
        type: ADD_COMMENT,
        payload,
    };
};

export const DeleteMovie = (id) => async (dispatch) => {
    try {
        const res = await axios.delete(
            `https://movit-api.herokuapp.com/api/movies/${id}`
        );
        dispatch({
            type: DELETE_MOVIE,
            payload: id,
        });
    } catch (err) {
        console.log(err.response.data);
    }
};

export const actLikeMovie = (movieId) => {
    return async (dispatch) => {
        const res = await CallApi(`movies/${movieId}/like`, "PUT", null);
        console.log(res);
        dispatch({
            type: LIKE_MOVIE,
            payload: movieId,
        });
    };
};

export const actUnlikeMovie = (movieId) => {
    return async (dispatch) => {
        const res = await CallApi(`movies/${movieId}/unlike`, "PUT", null);
        console.log(res);
        dispatch({
            type: UNLIKE_MOVIE,
            payload: movieId,
        });
    };
};

import CallApi from "../../apis/CallApi";
import { GET_MOVIES, GET_MOVIE } from "../types";

export const actFetchMovies = () => {
    return async (dispatch) => {
        const res = await CallApi("movies", "GET", null);
        console.log("actFetchMovies", res);
        dispatch(GetMovies(res.data));
    };
};

export const GetMovies = (payload) => {
    return {
        type: GET_MOVIES,
        payload,
    };
};

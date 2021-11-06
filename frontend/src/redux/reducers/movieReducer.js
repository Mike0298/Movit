import {
    GET_MOVIES,
    GET_MOVIE,
    ADD_MOVIE,
    DELETE_MOVIE,
    EDIT_MOVIE,
    LOADING_DATA,
} from "../types";

const initialState = {
    movies: [],
    movie: {},
    loading: false,
};

// eslint-disable-next-line import/no-anonymous-default-export
export default function (state = initialState, action) {
    switch (action.type) {
        case LOADING_DATA:
            return {
                ...state,
                loading: true,
            };
        case GET_MOVIES:
            return {
                ...state,
                movies: action.payload,
                loading: false,
            };
        case GET_MOVIE:
            return {
                ...state,
                movies: [action.payload, ...state.movies],
            };
        case ADD_MOVIE:
            return {
                ...state,
                movie: action.payload,
                loading: false,
            };
        case DELETE_MOVIE:
            let indexToDelete = state.movies.findIndex(
                (movie) => movie.id === action.payload.id
            );
            state.movies.splice(indexToDelete, 1);
            return {
                ...state,
            };
        case EDIT_MOVIE:
            let indexToEdit = state.movies.findIndex(
                (movie) => movie.id === action.payload.id
            );
            state.movies[indexToEdit] = action.payload;
            return {
                ...state,
            };
        default:
            return state;
    }
}

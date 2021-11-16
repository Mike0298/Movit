import {
  GET_MOVIES,
  GET_MOVIE,
  ADD_MOVIE,
  DELETE_MOVIE,
  EDIT_MOVIE,
  LOADING_DATA,
  ADD_COMMENT,
  GET_RANDOM_MOVIE,
  GET_MOVIES_BY_GENRE,
} from "../types";

const initialState = {
  movies: [],
  movie: {},
  loading: false,
};

// eslint-disable-next-line import/no-anonymous-default-export
export default function (state = initialState, action) {
  console.log(action);
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
        loading: true,
      };
    case GET_RANDOM_MOVIE:
      return {
        ...state,
        movies: action.payload,
        loading: false,
      };
    case GET_MOVIES_BY_GENRE:
      return {
        ...state,
        movies: action.payload,
        loading: false,
      };
    case ADD_MOVIE:
      return {
        ...state,
        movie: action.payload,
        loading: false,
      };
    case DELETE_MOVIE:
      let removeIndex = state.movies
        .map((movie) => movie._id.toString())
        .indexOf(action.payload);
      state.movies.splice(removeIndex, 1);
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
    case ADD_COMMENT:
      return {
        ...state,
        movies: {},
      };
    default:
      return state;
  }
}

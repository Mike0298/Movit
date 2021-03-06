import {
  SET_AUTHENTICATED,
  SET_UNAUTHENTICATED,
  SET_USER,
  LOADING_USER,
  FINISH_LOADING_USER,
} from "../types";

const initialState = {
  authenticated: false,
  loading: false,
  userDetails: {},
};

// eslint-disable-next-line import/no-anonymous-default-export
export default function (state = initialState, action) {
  switch (action.type) {
    case SET_AUTHENTICATED:
      return {
        ...state,
        authenticated: true,
        loading: false,
      };
    case SET_UNAUTHENTICATED:
      return initialState;
    case SET_USER:
      return {
        authenticated: true,
        loading: false,
        userDetails: {
          ...action.payload,
        },
      };
    case LOADING_USER:
      return {
        ...state,
        loading: true,
      };
    case FINISH_LOADING_USER:
      return {
        ...state,
        loading: false,
      };
    default:
      return state;
  }
}

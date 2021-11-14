import { SET_VIEW, FETCH_USERS, ADMIN_LOADING } from "../types";

const initialState = {
  currentView: 0,
  users: {},
  loading: false,
};

// eslint-disable-next-line import/no-anonymous-default-export
export default function (state = initialState, action) {
  switch (action.type) {
    case SET_VIEW: {
      return {
        ...state,
        currentView: action.payload,
      };
    }
    case FETCH_USERS: {
      return {
        ...state,
        users: action.payload,
        loading: false,
      };
    }
    case ADMIN_LOADING: {
      return {
        ...state,
        loading: true,
      };
    }

    default:
      return state;
  }
}

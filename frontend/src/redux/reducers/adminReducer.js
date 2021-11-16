import {
  SET_VIEW,
  FETCH_USERS,
  ADMIN_LOADING,
  MOD_IFY,
  UNMOD_IFY,
} from "../types";

const initialState = {
  currentView: 0,
  users: [],
  loading: false,
};

// eslint-disable-next-line import/no-anonymous-default-export
export default function (state = initialState, action) {
  console.log(action);
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
    case MOD_IFY: {
      let index = state.users
        .map((user) => user._id.toString())
        .indexOf(action.payload);
      console.log(index);
      state.users[index].user.accountType = "moderator";
      return {
        ...state,
      };
    }
    case UNMOD_IFY: {
      let index = state.users
        .map((user) => user._id.toString())
        .indexOf(action.payload);
      console.log(index);
      state.users[index].user.accountType = "member";
      return {
        ...state,
      };
    }
    default:
      return state;
  }
}

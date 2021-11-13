import { SET_VIEW } from "../types";

const initialState = {
  currentView: 0,
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
    default:
      return state;
  }
}

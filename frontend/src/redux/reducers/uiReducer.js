import {
    SET_ERRORS,
    CLEAR_ERRORS,
    LOADING_UI,
    STOP_LOADING_UI,
    SET_MESSAGES,
    CLEAR_MESSAGES,
} from "../types";

const initialState = {
    loading: false,
    errors: null,
    messages: null,
};

// eslint-disable-next-line import/no-anonymous-default-export
export default function (state = initialState, action) {
    switch (action.type) {
        case SET_ERRORS:
            return {
                ...state,
                errors: action.payload,
                loading: false,
            };
        case CLEAR_ERRORS:
            return {
                ...state,
                errors: null,
                loading: false,
            };
        case LOADING_UI:
            return {
                ...state,
                loading: true,
            };
        case STOP_LOADING_UI:
            return {
                ...state,
                loading: false,
            };
        case SET_MESSAGES:
            return {
                ...state,
                messages: action.payload,
                loading: false,
            };
        case CLEAR_MESSAGES:
            return {
                ...state,
                messages: null,
                loading: false,
            };
        default:
            return state;
    }
}

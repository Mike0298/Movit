import { createStore, combineReducers, applyMiddleware } from "redux";
import thunk from "redux-thunk";

import uiReducer from "./reducers/uiReducer";
import userReducer from "./reducers/userReducer";
import movieReducer from "./reducers/movieReducer";

// const initialState = {};

// const middleware = [thunk];
const reducers = combineReducers({
    UI: uiReducer,
    user: userReducer,
    movie: movieReducer,
});

const store = createStore(
    reducers,
    // initialState,
    // compose(reducers, initialState, applyMiddleware(...middleware))
    applyMiddleware(thunk)
);

export default store;

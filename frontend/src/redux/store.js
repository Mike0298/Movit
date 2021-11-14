import { compose, createStore, combineReducers, applyMiddleware } from "redux";
import thunk from "redux-thunk";

import uiReducer from "./reducers/uiReducer";
import userReducer from "./reducers/userReducer";
import movieReducer from "./reducers/movieReducer";
import adminReducer from "./reducers/adminReducer";

const initialState = {};

const middleware = [thunk];
const reducers = combineReducers({
    UI: uiReducer,
    user: userReducer,
    movie: movieReducer,
    admin: adminReducer,
});

const store = createStore(
    reducers,
    initialState,
    // compose(
    //   applyMiddleware(...middleware),
    //   window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
    // )
    applyMiddleware(thunk)
);

export default store;

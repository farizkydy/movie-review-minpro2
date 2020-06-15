import { combineReducers } from "redux";
import auth from "./auth";
import movieReducer from "./movie";

export default combineReducers({
    auth,
    movieReducer
});

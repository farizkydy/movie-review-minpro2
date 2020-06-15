import { combineReducers } from "redux";
import authReducer from "./auth";
// import loadingReducer from "./loading";
import movies from "./movies";

const rootReducers = combineReducers({
  auth: authReducer,
//   loading: loadingReducer,
  movies
  // movies //this is dummy data
});

export default rootReducers;
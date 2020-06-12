import { combineReducers } from "redux";
import authReducer from "./auth";
// import loadingReducer from "./loading";
import movieReducer from "./movie";
import movies from "./movies"

const rootReducers = combineReducers({
  auth: authReducer,
//   loading: loadingReducer,
  movie: movieReducer,
  movies
});

export default rootReducers;
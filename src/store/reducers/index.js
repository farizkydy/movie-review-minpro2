import {combineReducers} from "redux"
import auth from "./auth"
import homepageReducer from "./homepageReducer"

export default combineReducers({
    auth:auth,
    homepage:homepageReducer
})
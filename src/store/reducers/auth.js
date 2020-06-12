import { LOGIN_SUCCESS, LOGIN_FAILED } from "../actions/types";
const initialState = {
    token: localStorage.getItem("token"),
    error: null,
    isAuthenticate: false
}

const auth = (state = initialState, action) => {
    switch (action.type) {
        default:
            return {
                ...state
            }
        case LOGIN_SUCCESS:
            return {
                ...state,
                isAuthenticate: true
            }
        case LOGIN_FAILED:
            return {
                ...state,
                isAuthenticate: false,
                token: localStorage.removeItem("token")
            }
    }
}

export default auth;

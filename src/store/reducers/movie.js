import {LOGIN_SUCCESS} from "../actions/types"

const initialState = {
    token: localStorage.getItem("token"),
    isAuthenticated: false,
    errors: null
}

const auth = (state = initialState, action) => {
    switch(action.type) {
    default:
        return {
            ...state
        }
        case "get_movies": {
            return{
                ...state,
                isAuthenticated:true,
                token: action.data,
                name:action.data2,
                password: action.data1
            }
        }
    }
}

export default auth

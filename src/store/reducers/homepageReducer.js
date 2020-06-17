import {LOGIN_SUCCESS} from "../actions/types"

const initialState = {
    name:"test"
}

const homepageReducer = (state = initialState, action) => {
    switch(action.type) {
    default:
        return {
            ...state
        }
        case "MOVIE": {
            return{
                ...state,
                name:action.payload
            }
        }
    }
}

export default homepageReducer
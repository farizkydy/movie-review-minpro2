import {LOGIN_SUCCESS} from "./types";
import axios from "axios"

export const login = data => async dispatch => {
    try {
        const res = await axios.post("https://ga-todoapps.herokuapp.com/api/v1/user/login", data)
        console.log("login", res)
        localStorage.setItem("token", res.data.token)
        dispatch({
            type: LOGIN_SUCCESS
        })
    } catch(error) {
        console.log(error)

    }

}
import axios from "axios";
const baseUrl = "https://ga-todoapps.herokuapp.com/api/v1";
let token = localStorage.getItem("token")

export const getTodos = () => async dispatch => {
    try {
        const res = await axios.get(`${baseUrl}/task`, {
            headers: {
                auth: token
            }
        })
        dispatch({
            type: "GET_TODOS",
            payload: res.data.Task
        })
    } catch (error) {
        console.log(error.status)
    }
}


export const delTodo = id => async dispatch => {
    try {
        const res = await axios.delete(`${baseUrl}/task/${id}`, {
            headers: {
                auth: token
            }
        })
        dispatch({
            type: "DEL_TODOS",
            payload: id
        })
    } catch (error) {
        console.log(error.status)
    }
}

export const addTodo = id => async dispatch => {
    console.log("action add")
}

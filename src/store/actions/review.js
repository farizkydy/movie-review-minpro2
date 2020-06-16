import axios from "axios";

const baseUrl = "https://movie-hubapp.herokuapp.com/api/v1";

export const getReviews = id => async dispatch => {
    const token = localStorage.getItem("token");
    try {
        const res = await axios.get(`${baseUrl}/reviews/all`, {
            headers: token
        })
        dispatch({
            type: "GET_REVIEWS",
            payload: res.data
        })
    } catch (error) {
        console.log(error)
    }
}

export const getComment = id => async dispatch => {
    const token = localStorage.getItem("token");
    try {
        const res = await axios.post(`${baseUrl}/reviews/beforelogin?movieId=${id}`, {
            headers: token
        })
        dispatch({
            type: "GET_COMMENT",
            payload: res.data
        });
        const data = await res.json();
        dispatch({
            type: "GET_BEFORE",
            payload: data.data.description
        });

    } catch (error) {
        console.log(error)
    }
}
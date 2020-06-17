import axios from "axios";
const baseUrl = 'https://movie-hubapp.herokuapp.com/api/v1';

export const postReview = (id, data) => async dispatch => {
    let token = localStorage.getItem("token")
    console.log("data", data)
    try {
        const res = await axios.post(`${baseUrl}/reviews/${id}`, data, {
            headers: {
                auth: token
            }
        });
        console.log("post", res)
    } catch (error) {
        // if(res.status === "fail")
        alert("you can only give review one time!")
        console.log(error);
    }
}
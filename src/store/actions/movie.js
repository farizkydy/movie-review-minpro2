import axios from "axios";
import { GET_MOVIES, GET_MOVIES_ID } from "./types"
const baseUrl = "https://movie-hubapp.herokuapp.com/api/v1";
// let token = localStorage.getItem("token")

export const getMovies = () => async dispatch => {
    try {
        const res = await axios.get(`${baseUrl}/movies`, {
            // headers: {
            //     auth: token
            // }
        })
        dispatch({
            type: GET_MOVIES,
            payload: res.data
        })
    } catch (error) {
        console.log(error)
    }
}


// export const getMoviesById = () => async dispatch => {
//     try {
//         const res = await axios.get(`${baseUrl}/movies/id=${id}`, {
//             headers: {
//                 auth: token
//             }
//         })
//         dispatch({
//             type: GET_MOVIES_ID,
//             payload: res.data
//         })
//     } catch (error) {
//         console.log(error)
//     }
// }


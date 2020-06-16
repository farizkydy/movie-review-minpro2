// import axios from "axios";
// import { GET_MOVIES, GET_MOVIES_ID } from "./types"
// const baseUrl = "https://movie-hubapp.herokuapp.com/api/v1";
// // let token = localStorage.getItem("token")

// export const getMovies = () => async dispatch => {
//     try {
//         const res = await axios.get(`${baseUrl}/movies`, {
//             // headers: {
//             //     auth: token
//             // }
//         })
//         dispatch({
//             type: GET_MOVIES,
//             payload: res.data
//         })
//     } catch (error) {
//         console.log(error)
//     }
// }


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

import { GET_MOVIE } from "./types"
const baseUrl = "https://movie-hubapp.herokuapp.com/api/v1";


export const movieList = () => async dispatch => {
    try {
        const getMovieRes = await fetch(
            `${baseUrl}/movies`,
            {
                method: "GET",
                headers: {
                    "Content-Type": "application/json",
                    Accept: "application/json"
                }
            }
        );
        const dataMovie = await getMovieRes.json();
        console.log('movielist', dataMovie.data[0].rows)
        dispatch({
            type: GET_MOVIE,
            payload: dataMovie.data[0].rows
        });
    } catch (error) {
        console.log(error);
    }
};




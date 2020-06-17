

import { GET_MOVIE, GET_MOVIES_ID } from "./types";
import Axios from "axios";
const baseUrl = "https://movie-hubapp.herokuapp.com/api/v1";


export const getMovies = () => async dispatch => {
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

export const getMoviesId = (id) => {
    return dispatch => (
        Axios({
            method: "GET",
            url: `${baseUrl}/movies/${id}`,
            headers: {
                "Content-type": "application/json"
            }
        })
            .then((res) => {
                console.log(res, "RESDATA")
                dispatch({
                    type: GET_MOVIES_ID,
                    payload: res.data.data[0].movie
                })
            })
            .catch((err) => {
                console.log('ERROR', err)
            })
    )
};

// export const movieListPagination = (key) => async dispatch => {
//     try  {
//         const getMovieRes
//     }
// }

// export const movieListPagination = (key) => async dispatch => {
//     try {
//         const getMovieResp = await fetch(
//             `${baseUrl}/movies/?limit=10&page=${key}`,
//             {
//                 method: "GET",
//                 headers: {
//                     "Content-Type": "application/json",
//                     Accept: "application/json"
//                 }
//             }
//         );
//         const dataMovies = await getMovieResp.json();
//         console.log('movielist', dataMovie)
//         dispatch({
//             type: GET_MOVIE,
//             payload: dataMovies.data[0].rows
//         });
//     } catch (error) {
//         console.log(error);
//     }
// };


// import { GET_MOVIE } from "./types"
// const baseUrl = "https://movie-hubapp.herokuapp.com/api/v1";


// export const movieList = () => async dispatch => {
//     try {
//         const getMovieRes = await fetch(
//             `${baseUrl}/movies`,
//             {
//                 method: "GET",
//                 headers: {
//                     "Content-Type": "application/json",
//                     Accept: "application/json"
//                 }
//             }
//         );
//         const dataMovie = await getMovieRes.json();
//         console.log('movielist', dataMovie)
//         dispatch({
//             type: GET_MOVIE,
//             payload: dataMovie.data[0].rows
//         });
//     } catch (error) {
//         console.log(error);
//     }
// };

// export const movieListPagination = (key) => async dispatch => {
//     try {
//         const getMovieRes = await fetch(
//             `${baseUrl}/movies/?limit=10&page=${key}`,
//             {
//                 method: "GET",
//                 headers: {
//                     "Content-Type": "application/json",
//                     Accept: "application/json"
//                 }
//             }
//         );
//         const dataMovie = await getMovieRes.json();
//         console.log('movielist', dataMovie)
//         dispatch({
//             type: GET_MOVIE,
//             payload: dataMovie.data[0].rows
//         });
//     } catch (error) {
//         console.log(error);
//     }
// };

// export const movieListAction = () => async dispatch => {
//     try {
//         const getMovieRes = await fetch(
//             `${baseUrl}/movies/?movie=Action`,
//             {
//                 method: "GET",
//                 headers: {
//                     "Content-Type": "application/json",
//                     Accept: "application/json"
//                 }
//             }
//         );
//         const dataMovie = await getMovieRes.json();
//         console.log('movielist', dataMovie)
//         dispatch({
//             type: GET_MOVIE,
//             payload: dataMovie.data[0].rows
//         });
//     } catch (error) {
//         console.log(error);
//     }
// };

// export const movieListId = () => async dispatch => {
//     try {
//         const getMovieId = await fetch(
//             `${baseUrl}/movies/:id`,
//             {
//                 method: "GET",
//                 headers: {
//                     "Content-Type": "application/json",
//                     Accept: "application/json"
//                 }
//             }
//         )
//         const dataMovieId = await getMovieId.json();
//         console.log('movielist', dataMovieId)
//         dispatch({
//             type: "GET_MOVIE_ID",
//             payload: dataMovieId.data[0].rows.id
//         });
//     } catch (error) {
//         console.log(error);
//     }
// }






export const movieListId = () => async dispatch => {
  try{
    const getMovieId = await fetch(
      `${baseUrl}/movies/:id`,
      {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json"
        }
      }
    )
    const dataMovieId = await getMovieId.json();
    console.log('movielist', dataMovieId)
    dispatch({
      type: "GET_MOVIE_ID",
      payload: dataMovieId.data[0].rows.id
    });
  } catch (error) {
    console.log(error);
  }
  }

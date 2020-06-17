import { GET_MOVIE, LOADING, GET_GENRE } from "./types";
import Axios from "axios";
const baseUrl = "https://movie-hubapp.herokuapp.com/api/v1";

const token= localStorage.getItem("token")
export const ACTION_GET_MOVIE = () => {
  return dispatch => {
    console.log("ACTION_GET_MOVIE", token);
    // dispatch({ type: LOADING });
    Axios.get(`${baseUrl}/movies`, {
      headers: {
        Authorization: token
      }
    })
      .then(res => {
        console.log(res);
        console.log("title",res.data.data)
        dispatch({
          type: GET_MOVIE,
          payload: res.data.data
        });
        // dispatch({ type: LOADING });
      })
      .catch(error => {
        // console.log(error);
        // dispatch({
        //   type: ERROR_LOGIN,
        //   payload: error
        // });
        // dispatch({ type: LOADING });
      });
  };
};

// export const ACTION_GET_GENRE = () => {
//   return dispatch => {
//     console.log("ACTION_GET_GENRE");
//     dispatch({ type: LOADING });
//     Axios.get(`${baseUrl}/movies/allgenre`)
//       .then(res => {
//         console.log(res);
//         dispatch({
//           type: GET_GENRE,
//           payload: res.data.data
//         });
//         dispatch({ type: LOADING });
//       })
//       .catch(error => {
//         console.log(error);
//         dispatch({
//           type: ERROR_LOGIN,
//           payload: error
//         });
//         dispatch({ type: LOADING });
//       });
//   };
// };
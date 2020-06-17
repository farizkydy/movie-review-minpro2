import { GET_MOVIE } from "./types"
const baseUrl = "https://movie-hubapp.herokuapp.com/api/v1";


export const movieListPagination = (key) => async dispatch => {
    try {
        const getMovieResp = await fetch(
            `${baseUrl}/movies/?limit=10&page=${key}`,
            {
                method: "GET",
                headers: {
                    "Content-Type": "application/json",
                    Accept: "application/json"
                }
            }
        );
        const dataMovies = await getMovieResp.json();
        console.log('movielist', dataMovies)
        dispatch({
            type: GET_MOVIE,
            payload: dataMovies.data[0].rows
        });
    } catch (error) {
        console.log(error);
    }
};

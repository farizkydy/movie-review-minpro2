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
    console.log('movielist', dataMovie)
    dispatch({
      type: "GET_MOVIES",
      payload: dataMovie.data
    });
  } catch (error) {
    console.log(error);
  }
};



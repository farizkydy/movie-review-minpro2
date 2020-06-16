import { GET_MOVIE, GET_GENRE } from "../actions/types";

const intialState = {
  movies: []
}

const movieReducer = (state = intialState, action) => {
  switch (action.type) {
    case GET_MOVIE:
      return { ...state,movies:action.payload };
    case GET_GENRE:
      return { ...state, genres: action.payload };
    default:
      return state;
  }
};

export default movieReducer;

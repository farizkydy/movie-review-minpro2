// import {GET_MOVIES, GET_MOVIES_ID} from "../actions/types";
// const initialState = {
//   // todos: [],
//   movies: [],
//   // moviesID: [],
//   error: null
// }

// const movieReducer = (state = initialState, action) => {
//   switch (action.type) {
//     default:
//       return {
//         ...state
//       }
//     case GET_MOVIES:
//       console.log('movie detail success')
//       return {
//         ...state,
//         movies: action.payload
//       }
//     case GET_MOVIES_ID:
//       return {
//         ...state,
//         movies: action.payload
//       }

//   }
// }

// export default movieReducer;
import { GET_MOVIE, GET_GENRE } from "../actions/types";

const intialState = {
  movies: []
}

const movieReducer = (state = intialState, action) => {
  switch (action.type) {
    case GET_MOVIE:
      return { ...state, movies: action.payload };
    // case GET_GENRE:
    //   return { ...state, genres: action.payload };
    default:
      return state;
  }
};

export default movieReducer;


const initialState = {
  // todos: [],
  movies: [],
  // moviesID: [],
  error: null
}

const movieReducer = (state = initialState, action) => {
  switch (action.type) {
    default:
      return {
        ...state
      }
    case "GET_MOVIES":
      console.log('movie detail success')
      return {
        ...state,
        movies: action.payload
      }
    case "GET_MOVIES_ID":
      return {
        ...state,
        movies: action.payload
      }

  }
}

export default movieReducer;

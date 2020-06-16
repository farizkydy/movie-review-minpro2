const initialState = {
  todos: [],
  movies: []
}

const todos = (state = initialState, action) => {
  switch (action.type) {
    default:
      return {
        ...state
      }
    case "GET_TODOS":
      return {
        ...state,
        todos: action.payload
      }
    case "DEL_TODOS":
      return {
        ...state,
        todos: state.todos.filter(item => item.id !== action.payload)
      }

  }
}

export default todos;

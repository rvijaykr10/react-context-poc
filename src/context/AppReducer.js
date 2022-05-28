const AppReducer = (state, action) => {
  switch (action.type) {
    case "ADD_TODO":
      return {
        ...state,
        todos: [{ todo: action.payload }, ...state.todos],
      };
    case "DEL_TODO":
      return {
        ...state,
        todos: state.todos.filter((todo, index) => index !== action.payload),
      };
    default:
      return state;
  }
};

export default AppReducer;

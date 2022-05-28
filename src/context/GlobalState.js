import React, { createContext, useReducer } from "react";
import AppReducer from "./AppReducer";

const initialState = {
  todos: [],
};

export const GlobalContext = createContext(initialState);

export const GlobalProvider = ({ children }) => {
  const [state, dispatch] = useReducer(AppReducer, initialState);

  function addTodo(todo) {
    dispatch({
      type: "ADD_TODO",
      payload: todo,
    });
  }

  function delTodo(todoId) {
    dispatch({
      type: "DEL_TODO",
      payload: todoId,
    });
  }

  return (
    <GlobalContext.Provider
      value={{
        todos: state.todos,
        addTodo,
        delTodo,
      }}
    >
      {children}
    </GlobalContext.Provider>
  );
};

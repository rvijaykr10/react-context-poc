import React, { useContext } from "react";
import { GlobalContext } from "../context/GlobalState";
import "./TodoList.css";

function TodoList() {
  const { todos, delTodo } = useContext(GlobalContext);
  const delHandler = (index) => {
    delTodo(index);
  };
  return (
    <>
      {todos?.map((todo, index) => (
        <div className="todo" key={index}>
          <div>{todo.todo}</div>
          <div>
            <button type="buttom" onClick={() => delHandler(index)}>
              DELETE
            </button>
          </div>
        </div>
      ))}
    </>
  );
}

export default TodoList;

import React, { useState, useContext } from "react";
import { GlobalContext } from "../context/GlobalState";
import TodoList from "./TodoList";
import "./Todos.css";

function Todos() {
  const { addTodo } = useContext(GlobalContext);
  const [todo, setTodo] = useState("");

  const submitHandler = (e) => {
    e.preventDefault();
    addTodo(todo);
    setTodo("");
  };

  const onChangeHandler = (e) => {
    setTodo(e.target.value);
  };

  return (
    <div className="todos">
      <div className="form-container">
        <form onSubmit={submitHandler}>
          <div className="form-group">
            <input name="todo" value={todo} onChange={onChangeHandler} />
          </div>
          <div>
            <button type="submit">Add Todo</button>
          </div>
        </form>
      </div>
      <div className="list-container">
        <TodoList />
      </div>
    </div>
  );
}

export default Todos;

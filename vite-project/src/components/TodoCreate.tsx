import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { TodoType } from "../types/Types";
import { createTodo } from "../redux/slice/TodoSlice";

const TodoCreate = () => {
  const dispatch = useDispatch();

  const [newTodo, setNewTodo] = useState<string>("");

  const handleClickTodo = () => {
    if (newTodo.trim().length == 0) {
      alert("Write Todo");
      return;
    }

    const payload: TodoType = {
      id: Math.floor(Math.random() * 9999999999),
      content: newTodo,
    };

    dispatch(createTodo(payload));
    setNewTodo("");
  };

  return (
    <div className="todo-create">
      <input
        value={newTodo}
        onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
          setNewTodo(e.target.value)
        }
        className="todo-input"
        type="text"
      />
      <button onClick={handleClickTodo} className="todo-create-button">
        Create
      </button>
    </div>
  );
};

export default TodoCreate;

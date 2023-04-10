import React, { useEffect, useState } from "react";
import TodoForm from "./TodoForm";
import List from "./List";
import { nanoid } from "nanoid";

const App = () => {
  const [todoList, setTodoList] = useState(() => {
    const localTodos = localStorage.getItem("todo");
    if (localTodos == null) return [];
    return JSON.parse(localTodos);
  });
  const addTodo = (todo) => {
    const todoItem = {
      id: nanoid(),
      title: todo,
      isDone: false,
    };
    setTodoList((cTodos) => {
      return [...cTodos, todoItem];
    });
  };
  const deleteTodo = (id) => {
    setTodoList((cTodos) => {
      return cTodos.filter((c) => c.id !== id);
    });
  };
  const toggleTodo = (id, isDone) => {
    setTodoList((cTodos) => {
      return cTodos.map((t) => {
        if (t.id == id) {
          return { ...t, isDone };
        }
        return cTodos;
      });
    });
  };

  useEffect(() => {
    localStorage.setItem("todo", JSON.stringify(todoList));
  }, [todoList]);

  return (
    <div className="flex my-20 items-center space-y-2 flex-col justify-center ">
      <TodoForm onSubmit={addTodo} />
      <List list={todoList} deleteTodo={deleteTodo} toggleTodo={toggleTodo} />
    </div>
  );
};

export default App;

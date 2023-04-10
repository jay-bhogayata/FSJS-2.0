import React, { useState } from "react";

const TodoForm = ({ onSubmit }) => {
  const [todo, setTodo] = useState("");
  const handleSubmit = (e) => {
    e.preventDefault();
    if (todo == "") return alert("todo is empty");
    onSubmit(todo);
    setTodo("");
  };
  return (
    <div>
      <form className=" w-screen flex justify-center" onSubmit={handleSubmit}>
        <input
          type="text"
          value={todo}
          onChange={(e) => setTodo(e.target.value)}
          className="border-2 mx-4 py-1 md:w-1/4 border-black"
          placeholder="Enter a todo"
        />
        <button
          type="submit"
          className="bg-yellow-500 px-5 border-2 border-black"
        >
          add
        </button>
      </form>
    </div>
  );
};

export default TodoForm;

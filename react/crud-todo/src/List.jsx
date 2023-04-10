import React from "react";

const List = ({ list, deleteTodo, toggleTodo }) => {
  const handleDelete = (id) => {
    deleteTodo(id);
  };
  const handleToggle = (id, isDone) => {
    toggleTodo(id, isDone);
  };

  console.log(list);
  return (
    <div className="text-xl ">
      <ul>
        {list.map((t) => (
          <div className="flex items-center space-x-5 my-5" key={t.id}>
            <input
              className="p-5"
              type="checkbox"
              checked={t.isDone}
              onChange={(e) => handleToggle(t.id, e.target.checked)}
            />
            <li className="w-full">{t.title}</li>

            <button
              className="bg-red-500 p-1 px-4 rounded-md"
              onClick={(e) => handleDelete(t.id)}
            >
              delete
            </button>
          </div>
        ))}
      </ul>
    </div>
  );
};

export default List;

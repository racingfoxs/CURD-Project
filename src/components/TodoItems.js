import React from "react";
import { Link } from "react-router-dom";

const TodoItems = ({ todo, onDelete, setToUpdate }) => {
  return (
    <div className="p-2 lg:w-1/3 md:w-1/2 w-full my-5">
      <div className="h-full flex items-center border-gray-200 border p-4 rounded-lg">
        <h2 className="text-gray-900 title-font text-6xl px-2 font-medium">
          {todo.sno}
        </h2>
        <div className="flex-grow">
          <h2 className="text-gray-900 title-font font-medium">{todo.title}</h2>
          <p className="text-gray-500">{todo.desc}</p>
        </div>
        <div className="text-gray-900 title-font px-2 font-medium">
          
            <button
              className=" hover:bg-green-500 rounded-lg px-2 hover:text-white hover:border-2"
              onClick={() => {
                setToUpdate(todo);
              }}
            >
              Edit
            </button>
          <button
          className="mx-2 hover:bg-red-500 px-2 rounded-lg hover:text-white hover:border-2"
            onClick={() => {
              onDelete(todo);
            }}
          >
            Delete
          </button>
        </div>
        
      </div>
      <div className="border-2 p-2">
      <Link to={`/edit/${todo.title}`}>
        <button
              className="border-2 hover:bg-green-500 rounded-lg px-2 hover:text-white hover:border-2"
              onClick={() => {
                setToUpdate(todo);
              }}
            >
              New Page Edit
            </button>
            </Link>
      </div>
      
    </div>
  );
};

export default TodoItems;

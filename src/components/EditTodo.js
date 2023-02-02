import React, { useEffect, useState } from "react";
import { toast } from "react-toastify";
import { useNavigate } from "react-router-dom";

const EditTodo = ({ todo, addTodo, toUpdate, setToUpdate }) => {
  // const {titles} = useParams();  
  // const paramTitle = titles;
  const navigate = useNavigate();
  const [title, setTitle] = useState("");
  const [sno, setSno] = useState("");
  const [desc, setDesc] = useState("");
  const noNotify = () => toast.warn("Fields cannot be blank!");
  const submit = (e) => {
    e.preventDefault();
    if (!title || !desc) {
      noNotify();
    } else if (toUpdate?.title) {
      addTodo(sno, title, desc);
      setDesc("");
      setTitle("");
      setSno("");
      setToUpdate({ sno: "", title: "", desc: "" });
      navigate("/");
    }
  };


 
  // console.log("params sno ", paramTitle);

  // const localTodo = JSON.parse(localStorage.getItem("todo"));
  // console.log("local todo ", localTodo)
  // const [nsno = "localTodo.sno", ntitle, ndesc] = localTodo;
  // console.log("localtodo destrutor", nsno,ntitle,ndesc)

  // let nTodos = [...localTodo];
  // nTodos = nTodos.map((ele) => {
  //       if (paramTitle === ele.title) {
          
  //         return (
  //           ele
  //         );          
  //       }
  //     });
  //     console.log("map array ", nTodos)



  useEffect(() => {
   
    if (toUpdate?.title) {
      setTitle(toUpdate.title);
      setDesc(toUpdate.desc);
      setSno(toUpdate.sno);
    }
  }, [toUpdate]);

  return (
    <section className="text-gray-600 body-font">
      <div className="container lg:w-full py-3 sm:px-5 mx-auto">
        <form onSubmit={submit}>
          <div className="flex lg:w-2/3 w-full sm:flex-row flex-col mx-auto px-8 sm:space-x-4 sm:space-y-0 space-y-4 sm:px-0 items-end">
            <div className="relative flex-grow w-full">
              <input
                type="text"
                id="title"
                placeholder="Todo Title"
                name="title"
                value={title || ""}
                onChange={(e) => {
                  setTitle(e.target.value);
                }}
                className="w-full bg-gray-100 bg-opacity-50 rounded border border-gray-300 focus:border-indigo-500 focus:bg-transparent focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
              />
            </div>
            <div className="relative flex-grow w-full">
              <input
                id="desc"
                name="desc"
                placeholder="Todo Description"
                value={desc || ""}
                onChange={(e) => {
                  setDesc(e.target.value);
                }}
                className="w-full bg-gray-100 bg-opacity-50 rounded border border-gray-300 focus:border-indigo-500 focus:bg-transparent focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
              />
            </div>
            <div className="relative flex-grow w-full">
              <button
                type="submit"
                className="w-72  text-white bg-green-500 border-0 py-2 px-6 focus:outline-none hover:bg-indigo-600 rounded text-lg"
              >
                Update Task
              </button>
            </div>
          </div>
        </form>
      </div>
    </section>
  );
};

export default EditTodo;

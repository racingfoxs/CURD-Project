import React, { useState, useEffect } from "react";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Todo from "./components/Todo";
import About from "./components/About";
import { Routes, Route } from "react-router-dom";
import EditTodo from "./components/EditTodo";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const App = () => {
  let initTodo;
  if (localStorage.getItem("todo") === null) {
    initTodo = [];
  } else {
    initTodo = JSON.parse(localStorage.getItem("todo"));
  }

  const updateNotify = () => toast.success("Task Updated Successfully!");
  const addNotify = () => toast.success("Task Added Successfully!");
  const delNotify = () => toast.success("Task Deleted Successfully!");
  const [todo, setTodo] = useState(initTodo);

  const onDelete = (todos) => {
    setTodo(
      todo.filter((x) => {
        return x !== todos;
      })
    );
    delNotify();
    localStorage.setItem(" todo", JSON.stringify(todo));
  };

  const addTodo = (sno, title, desc) => {
    if (sno === todo.sno) {
      let newTodos = [...todo];
      newTodos = todo.map((ele) => {
        if (sno === ele.sno) {
          ele.title = title;
          ele.desc = desc;
        }
        return ele;
      });
      setTodo(newTodos);
      updateNotify();
    } else {
      if (todo.length === 0) {
        sno = 1;
      } else {
        sno = todo[todo.length - 1].sno + 1;
      }

      const newTodo = {
        sno: sno,
        title: title,
        desc: desc,
      };

      setTodo([...todo, newTodo]);
      addNotify();
    }
  };

  const updateTodo = (todo) => {
    console.log("updateTodo", todo);
  };

  const updatesTodo = (titles, descs) => {
    console.log("Updatestodo fired");
    // const newTodo = {
    //   title: titles,
    //   desc: descs,
    // };

    // setTodo([...todo, newTodo]);
  };

  useEffect(() => {
    localStorage.setItem("todo", JSON.stringify(todo));
  }, [todo]);

  return (
    <>
      <Header />
      <Routes>
        <Route
          path="/"
          element={
            <Todo
              todo={todo}
              onDelete={onDelete}
              addTodo={addTodo}
              updateTodo={updateTodo}
            />
          }
        />
        <Route path="/about" element={<About />} />
        <Route
          path="/edit"
          element={<EditTodo todo={todo} updatesTodo={updatesTodo} />}
        />
      </Routes>

      <Footer />
    </>
  );
};

export default App;

import React, { useState, useEffect } from "react";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Todo from "./components/Todo";
import About from "./components/About";
import { Routes, Route } from "react-router-dom";

const App = () => {
  let initTodo;
  if (localStorage.getItem("todo") === null) {
    initTodo = [];
  } else {
    initTodo = JSON.parse(localStorage.getItem("todo"));
  }

  const onDelete = (todos) => {
    setTodo(
      todo.filter((x) => {
        return x !== todos;
      })
    );
    localStorage.setItem(" todo", JSON.stringify(todo));
  };

  const addTodo = (title, desc) => {
    let sno;
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
  };

  const [todo, setTodo] = useState(initTodo);

  useEffect(() => {
    localStorage.setItem("todo", JSON.stringify(todo));
  }, [todo]);

  return (
    <>
      <Header />
      <Routes>
        <Route
          path="/"
          element={<>
          <Todo todo={todo} onDelete={onDelete} addTodo={addTodo} /></>}/>
        <Route path="/about" element={<About/>}/>
      </Routes>

      <Footer />
      </>
  );
};

export default App;

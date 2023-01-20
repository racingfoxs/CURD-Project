import React, { useState, useEffect } from "react";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Todo from "./components/Todo";
import AddTodo from "./components/AddTodo";

const App = () => {
  let initTodo;
  if (localStorage.getItem("todo")===null) {
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
    if (todo == 0) {
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
      <section className="bg-grey-500 text-black-600 px-20 py-10">
        <AddTodo addTodo={addTodo} />
      </section>
      <Todo todo={todo} onDelete={onDelete} />
      <Footer />
    </>
  );
};

export default App;

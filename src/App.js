import React, { useState, useEffect } from "react";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Todo from "./components/Todo";
import About from "./components/About";
import { Routes, Route } from "react-router-dom";
import EditTodo from "./components/EditTodo";

const App = () => {
  let initTodo;
  if (localStorage.getItem("todo") === null) {
    initTodo = [];
  } else {
    initTodo = JSON.parse(localStorage.getItem("todo"));
  }

  const [todo, setTodo] = useState(initTodo);


  const onDelete = (todos) => {
    setTodo(
      todo.filter((x) => {
        return x !== todos;
      })
    );
    localStorage.setItem(" todo", JSON.stringify(todo));
  };

  const addTodo = (sno,title, desc) => {
    if(sno){

      let newTodos = [...todo]
      newTodos = todo.map(ele=>{ 
        if(sno === ele.sno){
          ele.title = title
          ele.desc = desc
        }
        return ele
      })
      setTodo(newTodos)
    }
    else{
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

    setTodo([...todo, newTodo]);}
  };

  const updateTodo = (todo) => {
    console.log("updateTodo",todo)
  };

  const updatesTodo = (titles, descs) => {
   console.log("Updatestodo fired")
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

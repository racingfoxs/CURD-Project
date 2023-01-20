import React,{useState} from 'react';
import Header from "./components/Header";
import Footer from "./components/Footer";
import Todo from "./components/Todo";

const App = () => {

  const [todo, setTodo] = useState([
   {
    sno: 1,
    title: "Go to Shop",
    desc: "Bring Chocolate"
  },
  {
    sno: 2,
    title: "Go to Bakery",
    desc: "Bring Cake"
  },
  {
    sno: 3,
    title: "Go to PetrolPump",
    desc: "Petrol Pump"
  }
  ]);

  const onDelete = todos => {
    console.log("Works", todos);
    setTodo(todo.filter((x) => x !== todos)); 
};

  return (
    <>
      <Header/>
      <Todo todo={todo} onDelete={onDelete}/>
      <Footer/>
    </>
  )
}

export default App
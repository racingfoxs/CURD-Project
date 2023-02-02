import TodoItems from "./TodoItems";
import AddTodo from "./AddTodo";


const Todo = (props) => {


  return (
    <>
     
      <AddTodo toUpdate={props.toUpdate} addTodo={props.addTodo} setToUpdate={props.setToUpdate} />
      <section className="text-gray-600 body-font">
        <div className="container lg:w-2/3 sm:px-5 mx-auto">
          <div className="flex flex-wrap">
            {props.todo.length
              ? props.todo.map((todo) => {
                  return (
                    <TodoItems
                      key={todo.sno}
                      todo={todo}
                      onDelete={props.onDelete}
                      // updateTodo={props.updateTodo}
                      setToUpdate={props.setToUpdate}
                    />
                  );
                })
              : "No Todos Left"}
          </div>
        </div>
      </section>
    </>
  );
};

export default Todo;

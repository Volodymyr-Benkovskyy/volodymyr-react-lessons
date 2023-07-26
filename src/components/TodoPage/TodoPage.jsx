import { Component } from "react";
import PrioritySelect from "../PrioritySelect/PrioritySelect";
import ToDoForm from "../TodoForm/TodoForm";
import ToDoList from "../TodoList/TodoList";
import { todo as todoList } from "../../data/todo";

class TodoPage extends Component {
  state = {
    todo: todoList,
    priority: "all"
  };


  // задача метода взяти todo і записати в стейт 
  addTodo = (todo) => {
    this.setState((prevState) => ({ todo: [...prevState.todo, todo] }))
  };

 //  метод видаляє тудушку з колекції тобто з масиву
  removeTodo = (id) => {
    this.setState((prevState) => ({ todo: prevState.todo.filter((el) => el.id !== id) }))
  };
  // обновлює статус тудушки на вик..трю  не викон...фолс
 updateTodoStatus = (id) => {
    this.setState((prev) => ({
      todo: prev.todo.map((el) =>
        el.id !== id ? el : { ...el, isDone: !el.isDone }
      ),
    }));
  };

// додає пріоритетність тудушці 
  changePriority = (e) => {
    const { value } = e.target
    console.log("value :>> ", value);
    this.setState({priority: value})
  }

// фільтрує тудушки по пріоріті 
  filterTodo = () => {
    const { todo, priority } = this.state;

    if (priority === "all") return todo;
    return todo.filter((el)=> el.priority === priority)
  }

  render() {

    const filterdTodo = this.filterTodo()
    return (
      <>
        <ToDoForm  addTodo={ this.addTodo} />
        <PrioritySelect priority={this.state.priority}
          changePriority={this.changePriority}

        />
        <ToDoList todo={filterdTodo}
          removeTodo={this.removeTodo}
          updateTodoStatus={this.updateTodoStatus} />
      </>
    );
  }
}

export default TodoPage;


/*  addTodo={this.addTodo} */

  /* todo={filterdTodo}
          removeTodo={this.removeTodo}
          updateTodoStatus={this.updateTodoStatus} */
                /* priority={this.state.priority}
          changePriority={this.changePriority} */

          
 /*  changePriority = (e) => {
    const { value } = e.target;
    console.log("value :>> ", value);
    this.setState({ priority: value });
  }; */

    // find -> el | undefined || some -> true | false

 /*  addTodo = (todo) => {
    this.setState((prevState) => ({ todo: [...prevState.todo, todo] }));
  }; */

 /*  removeTodo = (id) => {
    this.setState((prev) => ({ todo: prev.todo.filter((el) => el.id !== id) }));
  }; */

 /*  updateTodoStatus = (id) => {
    this.setState((prev) => ({
      todo: prev.todo.map((el) =>
        el.id !== id ? el : { ...el, isDone: !el.isDone }
      ),
    }));
  }; */

/*   filterTodo = () => {
    const { todo, priority } = this.state;
    if (priority === "all") return todo;
    return todo.filter((el) => el.priority === priority);
  }; */
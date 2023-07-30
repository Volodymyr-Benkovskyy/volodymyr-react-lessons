import { Component } from "react";
import PrioritySelect from "../PrioritySelect/PrioritySelect";
import ToDoForm from "../TodoForm/TodoForm";
import ToDoList from "../TodoList/TodoList";
import { todo as todoList } from "../../data/todo";
import { v4 } from 'uuid';
class TodoPage extends Component {
  state = {
    todo: todoList,
    priority: "all",
    isOpen: false,
  };

  //У даному випадку метод getSnapshotBeforeUpdate()
  //повертає висоту(висоту документа) document.body.clientHeight
  // висоту контенту на баді
  getSnapshotBeforeUpdate() {
    return  document.body.clientHeight; 
  }

  /* метод життєвого циклу компонента в React,
   який викликається після кожного оновлення компонента і
    дозволяє виконати додаткові дії на основі попередніх властивостей та стану компонента. */
  componentDidUpdate(prevProps, prevState, snapshot) {
    //console.log("Todo Page CDU");
    if (prevState.todo !== this.state.todo) {
   

      //Цей код з використанням window.scrollTo() 
      //з параметром behavior: "smooth" забезпечує плавну прокрутку веб - сторінки 
      //до заданої вертикальної позиції snapshot
      window.scrollTo({  
        top: snapshot,
        behavior: "smooth"
      })


    localStorage.setItem("todo", JSON.stringify(this.state.todo));
    }
    
    if (prevState.priority !== this.state.priority) {
      this.setState({ isOpen: true })
    }
  }

  // метод який додає по кліку масив з 15 елементами state.todo +15
    onhandleAddMoreTodo = () => {
      const newTodo = { ...this.state.todo[0] }
      const todoList = Array(15).fill("").map((el) => ({ ...newTodo, id: v4() }));
      this.setState((prev)=>({todo: [...prev.todo, ...todoList ]}))
  }

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
        <button type="button"  onClick={this.onhandleAddMoreTodo}> Add More Todo</button>
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
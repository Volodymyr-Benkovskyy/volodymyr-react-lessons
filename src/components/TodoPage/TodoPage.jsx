import { Component, useEffect, useState } from "react";
import PrioritySelect from "../PrioritySelect/PrioritySelect";
import ToDoForm from "../TodoForm/TodoForm";
import ToDoList from "../TodoList/TodoList";
import { todo as todoList } from "../../data/todo";
import { v4 } from "uuid";
import { useLocalStorage } from "../../hooks/useLocalStorage";



const TodoPage = () => {

  const [todo, setTodo] = useLocalStorage("todo", []);
  const [priority, setPriority] = useState("all");



   // добавляє  створену todo в колекцію
  const addTodo = (todo) => {
    setTodo(prevTodo => [...prevTodo, todo])
  };
  
   // видаляє todo з колекції масива по id 
  const removeTodo = (id) => {
     setTodo((prev =>  prev.filter((el) => el.id !== id)))
  
  };

   // обновлює 
  const updateTodoStatus = (id) => {
    setTodo(prev => prev.map((el) => (el.id !== id ? el : { ...el, isDone: !el.isDone })))
  }
 //  фільтру наш масив з todo по priority
    const filterTodo = () => {
    if (priority === "all") return todo;
    return todo.filter((el) => el.priority === priority);
  };

  // записуєм результат filterTodo і передаєм пропсами на  ToDoList
    const filterdTodo = filterTodo()

  // змінює пріоріті 
  const changePriority = (e) => {
    setPriority(e.target.value)
  }


  //  ВАЖЛИВО ПАМЯТАТИ  useEffect ВАЖЛИВИЙ ПОРЯДОК ВИКЛИКУ //


  // ==== переносим даний  useEffect в стейт ===== ///

   /*  useEffect(() => {
    console.log("useEffect--one-time");
    const savedTodo = JSON.parse(localStorage.getItem("todo") || []) ;
    setTodo(savedTodo)
    }, []); */
  
   // ==== переносим даний  useEffect в стейт ===== ///

  useEffect(() => {
    console.log("useEffect--priority");
  }, [priority]);
  
  

    return (
      <>
        <ToDoForm addTodo={addTodo} />
        <PrioritySelect
           priority={priority}
           changePriority={changePriority}
        />
        <ToDoList
          todo={filterdTodo}
          removeTodo={removeTodo}
          updateTodoStatus={updateTodoStatus}
        />
        {/* <button type="button" onClick={this.handleAddMoreTodo}>
          Add more todo
        </button> */}
      </>

    );
}

export default TodoPage;
 
/* class TodoPageClass extends Component {
  state = {
    todo: [], // 4 + 15
    priority: "all",
    isOpen: false,
  };

  getSnapshotBeforeUpdate() {
    return document.body.clientHeight;
  }

  componentDidMount() {
    const savedTodo = JSON.parse(localStorage.getItem("todo")) || todoList;
    this.setState({ todo: savedTodo });
  }

  componentDidUpdate(prevProps, prevState, snapshot) {
    // console.log("Todo Page CDU");

    if (prevState.todo !== this.state.todo) {
      localStorage.setItem("todo", JSON.stringify(this.state.todo));
      window.scrollTo({
        top: snapshot,
        behavior: "smooth",
      });
    }
    if (prevState.priority !== this.state.priority) {
      this.setState({ isOpen: true });
    }
  }

  changePriority = (e) => {
    const { value } = e.target;
    this.setState({ priority: value });
  };

  addTodo = (todo) => {
    this.setState((prevState) => ({ todo: [...prevState.todo, todo] }));
  };

  removeTodo = (id) => {
    this.setState((prev) => ({ todo: prev.todo.filter((el) => el.id !== id) }));
  };

  updateTodoStatus = (id) => {
    this.setState((prev) => ({
      todo: prev.todo.map((el) =>
        el.id !== id ? el : { ...el, isDone: !el.isDone }
      ),
    }));
  };

   handleAddMoreTodo = () => {
    const newTodo = { ...this.state.todo[0] };
    const todoList = Array(15)
      .fill("")
      .map((el) => ({ ...newTodo, id: v4() }));
    this.setState((prev) => ({ todo: [...prev.todo, ...todoList] }));
  }; 

  filterTodo = () => {
    const { todo, priority } = this.state;
    if (priority === "all") return todo;
    return todo.filter((el) => el.priority === priority);
  };

  render() {
    // console.log("TodoPage render");
    const filterdTodo = this.filterTodo();

    return (
      null
    );
  }
  }; */


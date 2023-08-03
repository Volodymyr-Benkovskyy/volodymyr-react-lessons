import {  useState } from "react";
import s from "./TodoForm.module.scss";
import { v4 as uuidv4 } from "uuid";
import { useLocalStorage } from "../../hooks/useLocalStorage";

const priorityOptions = {
  LOW: "low",
  MEDIUM: "medium",
  HIGH: "high",
};


const TodoForm = ({ addTodo }) => {
  //  описуєм стейт перший опис для розуміння як працює... useState

  // перший мето роботи з формою 
  /*  const [date, setDate] = useState("2023-02-02");
   const [descr, setDescr] = useState("");
   const [priority, setPriority] = useState("");
 
   const handleChange = (e) => {
     const { name, value } = e.target
     switch (name) {
       case "date":
         setDate(value)
         return;
       case "descr":
         setDescr(value)
         return;
       case "priority":
         setPriority(value)
         return;
       default:
         return;
     };
        const handleSubmit = (e) => {
     e.preventDefault()
     const newTodo = {
       date, descr, priority, isDone: false, id: uuidv4()
     };
     addTodo(newTodo)
   }; 
   } */
  // другий метод роботи з формою 
  
  // const [Form, setForm] = useState({
  //   date: "2023-05-03",
  //   descr: "",
  //   priority: "",

  // });
 
  const [Form, setForm] = useLocalStorage("todoForm ", {
    date: "2023-05-03",
    descr: "",
    priority: "",

  });


  
  const handleChange = (e) => {
    e.preventDefault();
    const { name, value } = e.target; //  подія на інпут полі Change 
    setForm(prevForm => ({ ...prevForm, [name]: value }))            //  записуємзгачення в змнну name

  }

  const handleSubmit = (e) => {
    e.preventDefault();
    const newTodo = {
      ...Form, isDone: false, id: uuidv4()
    };
    addTodo(newTodo);
  }


    return (
    
      
      <form className={s.form} onSubmit={handleSubmit}>
        <label className={s.label}>
          <span> Date </span>
          <input
            className={s.input}
            name="date"
            value={Form.date}
            type="date"
            //onChange={this.handleChange}  метод з класовим компонентом//
            onChange={handleChange} // метод з хуками
          />
        </label>
        <label className={s.label}>
          <span> Description </span>
          <input
            className={s.input}
            type="text"
            name="descr"
            value={Form.descr}
            onChange={handleChange}
          />
        </label>

        <div className={s.labelWrapper}>
          <div className={s.radioWrapper}>
            <input
              id="formRadioLow"
              className={s.input}
              type="radio"
              name="priority"
              value={priorityOptions.LOW}
              checked={Form.priority === priorityOptions.LOW}
              onChange={handleChange}
            />
            <label className={`${s.label} ${s.radio}`} htmlFor="formRadioLow">
              Low
            </label>
          </div>
          <div className={s.radioWrapper}>
            <input
              id="formRadioMedium"
              className={s.input}
              type="radio"
              name="priority"
              value={priorityOptions.MEDIUM}
              checked={Form.priority === priorityOptions.MEDIUM}
              onChange={handleChange}
            />
            <label
              className={`${s.label} ${s.radio}`}
              htmlFor="formRadioMedium"
            >
              Medium
            </label>
          </div>
          <div className={s.radioWrapper}>
            <input
              id="formRadioHigh"
              className={s.input}
              type="radio"
              name="priority"
              value={priorityOptions.HIGH}
              checked={Form.priority === priorityOptions.HIGH}
              onChange={handleChange}
            />
            <label className={`${s.label} ${s.radio}`} htmlFor="formRadioHigh">
              High
            </label>
          </div>
        </div>
        <button className={s.submit} type="submit">
          Ok
        </button>
      </form>
    )
   




  };


export default TodoForm;
 

/* class ToDoFormClass extends PureComponent {
  state = {
    date: "2023-02-02",
    descr: "",
    priority: "",
  };

 

  handleChange = (e) => {
    const { name, value, type, checked } = e.target;

    if (type === "checkbox") {
      this.setState((prevState) => ({
        [name]: checked
          ? [...prevState[name], value]
          : prevState[name].filter((el) => el !== value),
      }));
      return;
    }

    this.setState({ [name]: value });
  };

  handleSubmit = (e) => {
    e.preventDefault();
    this.props.addTodo({ ...this.state, id: uuidv4(), isDone: false });
  };

  render() {
    // console.log("Form render");

   return(null)

   
  }
} */





 // static getDerivedStateFromProps(props, state) {
  //   // console.log("props :>> ", props);
  //   // console.log("state :>> ", state);
  //   console.log("Form getDerivedStateFromProps");
  //   // const newState = { descr: "getDerivedStateFromProps" };
  //   // return newState;
  //   return null;
  // }

  // componentDidMount() {
  //   console.log("Form CDM");
  // }

  // shouldComponentUpdate(newProps, newState) {
  //   console.log("props :>> ", newProps);
  //   console.log("newState :>> ", newState);
  //   console.log("this.state :>> ", this.state);
  //   if (
  //     newState.date !== this.state.date ||
  //     newState.descr !== this.state.descr ||
  //     newState.priority !== this.state.priority
  //   )
  //     return true; // -> render true
  //   // {} !== {}
  //   return false; // -> render false
  // }
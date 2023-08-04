import {  useState, memo} from "react";
import s from "./TodoForm.module.scss";
import { v4 as uuidv4 } from "uuid";

//HOC ==>>  КОМПОНЕНТ ВИЩОГО ПОРЯДКУ 
const priorityOptions = {
  LOW: "low",
  MEDIUM: "medium",
  HIGH: "high",
};


const TodoForm = ({ addTodo }) => {
  const [Form, setForm] = useState("todoForm ", {
    date: "2023-05-03",
    descr: "",
    priority: "",

  });


  const handleChange = (e) => {
    e.preventDefault();
    const { name, value } = e.target; //  подія на інпут полі Change 
    setForm(prevForm => ({ ...prevForm, [name]: value }))  //  записуємзгачення в змнну name
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
export default  memo(TodoForm) ;
 

/* class ToDoFormClass extends PureComponent {
  state = {
    date: "2023-02-02",
    descr: "",
    priority: "",
  }; */

 

  
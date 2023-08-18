
//import { type } from "@testing-library/user-event/dist/type";
import {
 // counterDecrementAction,
  counterIncrementAction,
  resetCounterAction
} from "../redux/Counter/CounterActions";
import { decrement, increment,reset } from "../redux/counterSlice";
import s from "./Counter.module.scss";
import { useDispatch, useSelector } from "react-redux";



const Counter = () => {
  
  //  - це спосіб отримати доступ до функції dispatch
  const dispatch = useDispatch(); 

 
  // отримуєм значення count з стейту за допомогою  ==>> useSelector
  const count = useSelector((state) => state.count)
  

  return (
    <div className={s.container}>
      <h1 className={s.title}>Counter</h1>
      <p className={s.count}>{count}</p>
      <div className={s.btnsWrapper}>
        
        <button
         // onClick={() => dispatch({ type:"counter/decrement", payload: 25})}
         // onClick={() => dispatch(counterDecrementAction(25))}
           onClick={() => dispatch(decrement(25))} //  method slice
          className={s.btn}
          type="button"
        >
          -
        </button>
        <button className={s.btn}
          //onClick={() => dispatch(resetCounterAction())}
          onClick={() => dispatch(reset())} // method slice
          type="button">
          0
        </button>
        <button
          className={s.btn}
          type="button"
          onClick={() => dispatch(increment(15))}
        >
          +
        </button>
      </div>
    </div>
  );
};

export default Counter;


 // const dispatch = useDispatch();   - це спосіб отримати доступ до функції dispatch

 // useSelector - це хук бібліотеки React-Redux, що дозволяє компонентам React 
 // отримувати актуальні дані з Redux store шляхом вибору певних частин стану 
 // для автоматичного оновлення компонентів при їх зміні.






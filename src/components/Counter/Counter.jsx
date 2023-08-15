//import { useState } from "react";
import s from "./Counter.module.scss";
import { useDispatch, useSelector } from "react-redux";






const Counter = () => {
 // const [count, setCount] = useState(0);

  const dispatch = useDispatch(); //  - це спосіб отримати доступ до функції dispatch

  const count = useSelector((state)=> state.count)
  return (
    <div className={s.container}>
      <h1 className={s.title}>Counter</h1>
      <button onClick={() => dispatch({type:"change/name"})}>Change Username</button>
      <p className={s.count}>{count}</p>
      <div className={s.btnsWrapper}>
        <button
          //onClick={() => setCount((prevCount) => prevCount - 10)}
          className={s.btn}
          type="button"
        >
          -
        </button>
        <button className={s.btn}
         // onClick={() => setCount(0)}
          type="button">
          0
        </button>
        <button
          className={s.btn}
          type="button"
          //onClick={() => setCount((prevCount) => prevCount + 25)}
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






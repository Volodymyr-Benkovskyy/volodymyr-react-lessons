import {  useState  } from "react";
import s from "./Counter.module.scss";

// приклад створення  Hook 
// const  useCustomHook = () => {
//     const [count, setCount] = useState(0);
//  }

const Counter = () => {
 // const [number, setNumber] = useState(125); 
 // const [string, setString] = useState("hello");
 // const [array, setArray] = useState([0]);


  const [count, setCount] = useState(0);


  //console.log('number :>> ', number);
  //console.log('string :>> ', string);
  //console.log('array :>> ', array);
  
    
 return (
    <div className={s.container}>
      <h1 className={s.title}>Counter</h1>
      <p className={s.count}>{count}</p>
      <div className={s.btnsWrapper}>

        <button
          className={s.btn}
         onClick={() => setCount((prevCount => prevCount - 10 ))}
          type="button">  - </button>
        
        <button className={s.btn}
         onClick={() => setCount(0)}
         type="button"
           >
          0
        </button>

        <button
         className={s.btn}
         onClick={() => setCount((prevCount => prevCount + 25 ))}
         type="button"
        >
          +
        </button>
      </div>
    </div>
  );
}

export default Counter;






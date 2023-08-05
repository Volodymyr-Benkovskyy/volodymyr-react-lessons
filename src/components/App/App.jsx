 //import Counter from "../Counter/Counter";
import TodoPage from "../TodoPage/TodoPage";
import Header from "../Header/Header";
import { IsOpenProvider } from "../../context/IsOpenProvider";


const App = () => {
  return (
    <>
      <IsOpenProvider>
        <Header  />
        <TodoPage  />
       {/*  <Counter /> */}
      </IsOpenProvider>
     
    </>
  );
};

export default App;




/* 
Метод Provider відноситься до контекстної системи у бібліотеці React. 
Контекст дозволяє передавати дані зверху вниз через компоненти дерева,
 не передаючи дані через вручну кожен проміжний компонент.

Метод Provider є частиною об'єкту контексту, який дозволяє встановити значення контексту, 
яке буде доступне для всіх дочірніх компонентів.
 Це дозволяє забезпечити глобальний доступ до даних,
  які можуть бути використані безпосередньо в компонентах, що знаходяться глибоко в ієрархії.
 */
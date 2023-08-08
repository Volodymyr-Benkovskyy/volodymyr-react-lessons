import "./assets/styles/vars.css";
import "./index.scss";

import App from "./components/App/App";
import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(
  <React.StrictMode>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </React.StrictMode>
);

//react-router-dom - це пакет для реакт-додатків,
//який надає компоненти і функціональність для реалізації
//маршрутизації(навігації між сторінками) на клієнтському боці веб - додатку,
//використовуючи бібліотку

//<BrowserRouter> - це компонент бібліотеки React Router,
// який надає можливість встановити маршрутизацію на рівні клієнта веб - додатку,
//  дозволяючи змінювати вміст сторінки без перезавантаження всієї сторінки.

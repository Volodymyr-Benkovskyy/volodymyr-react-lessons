// method POST - Pushing Data firebaseio
"/message_list.json";
import axios from "axios";

axios.defaults.baseURL = "https://event-1-7e2a8-default-rtdb.firebaseio.com";

export const addTodoApi = (todo) => {
  return axios.post("/todo.json", todo).then((res) => {
    const { data } = res;
    return { ...todo, id: data.name };
  });
};

export const getTodoApi = () => {
  return axios
    .get("/todo.json")
    .then(({ data }) =>
      Object.entries(data).map(([id, dataForm]) => ({ id, ...dataForm }))
    );
};

export const removeTodoApi = (id) => {
  return axios.delete(`/todo/${id}.json`).then((res) => res.data);
};

export const updateTodoStatusApi = (id, data) => {
  return axios.patch(`/todo/${id}/.json`, data).then((res) => res.data);
};

//https://event-1-7e2a8-default-rtdb.firebaseio.com/

//"https://event-1-7e2a8-default-rtdb.firebaseio.com/message_list.json";

// {name: "-NcIpSxbX4VTL1MOtSp6"}; те  шо повертає сервер обєкт з ключом

//  getTodoApi

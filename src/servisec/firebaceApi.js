// method POST - Pushing Data firebaseio

import axios from "axios";

axios.defaults.baseURL = "https://event-1-7e2a8-default-rtdb.firebaseio.com";

export const addTodoApi = (todo) => {
  return axios.post("/message_list.json", todo).then((res) => {
    const { data } = res;
    return { ...todo, id: data.name };
  });
};

//https://event-1-7e2a8-default-rtdb.firebaseio.com/

//"https://event-1-7e2a8-default-rtdb.firebaseio.com/message_list.json";

// {name: "-NcIpSxbX4VTL1MOtSp6"}; те  шо повертає сервер обєкт з ключом

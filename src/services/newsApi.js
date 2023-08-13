import axios from "axios";

axios.defaults.baseURL = "https://newsapi.org/v2";

const API_KEY = "42ee593af8484a5a82756cb35b09ccd6";

export const getCountryNewsApi = (country) => {
  return axios
    .get("/top-headlines", {
      params: {
        country,
        pageSize: 10,
        apiKey: API_KEY,
      },
    })
    .then((res) => res.data.articles);
};

// https://newsapi.org/v2/everything?q=bitcoin&apiKey=ff8bb18441504260adbe0ecc126652ff

export const getSearchNewsApi = (query, page) => {
  return axios
    .get("/everything", {
      params: {
        q: query,
        page,
        pageSize: 5,
        apiKey: API_KEY,
      },
    })
    .then((res) => res.data.articles);
};

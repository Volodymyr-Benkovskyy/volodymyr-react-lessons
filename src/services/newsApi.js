import axios from "axios";

axios.defaults.baseURL = "https://newsapi.org/v2";

const API_KEY = "ff8bb18441504260adbe0ecc126652ff";

export const getCountryNewsApi = (country) => {
  return axios
    .get("top-headlines", {
      params: {
        country,
        pageSize: 10,
        apiKey: API_KEY,
      },
    })
    .then((res) => res.data.articles);
};

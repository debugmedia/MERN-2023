import axios from "axios";

const API_URL = "http://localhost:3005/api/todo";

const fetchAPI = async () => {
  const response = await axios(API_URL);
  return response;
};

export const postAPI = async (method, data) => {
  const response = await axios(API_URL, {
    method,
    data,
  });
  return response;
};

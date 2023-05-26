import axios from "axios";

const API_URL = "https://mern-2023-nhff.vercel.app/api/todo";

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

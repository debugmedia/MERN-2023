import axios from "axios";

export const fetchUsers = async () => {
  const response = await axios("https://jsonplaceholder.typicode.com/todos");
  return response.data;
};

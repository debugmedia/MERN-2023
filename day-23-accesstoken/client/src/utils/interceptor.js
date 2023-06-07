import axios from "axios";

export const axiosInstance = axios.create({
   baseURL: "http://localhost:3003/api",
});

// 401 - UnAuthorised
axiosInstance.interceptors.response.use(
   (response) => response,
   async (error) => {
      if (error.response.status === 401) {
         const response = await axiosInstance("/refresh-token");
         localStorage.setItem("token", response.data.accessToken);
         window.location.reload();
      }
      return Promise.reject(error);
   }
);

// Attach Cookie on every request
axiosInstance.interceptors.request.use(
   (request) => {
      const token = localStorage.getItem("token");
      if (token) {
         request.withCredentials = true;
         request.headers.Authorization = token;
      }
      return request;
   },
   (error) => error
);

import { useContext, useEffect } from "react";
import { Navigate, Outlet, useNavigate } from "react-router-dom";
import { AuthContext } from "../context/Auth";
import useLocalStorage from "../hooks/useLocalStorage";

const ProtectedRouterAfterLogIn = () => {
   const token = localStorage.getItem("token");

   return token ? <Navigate to="/home" /> : <Outlet />;
};

export default ProtectedRouterAfterLogIn;

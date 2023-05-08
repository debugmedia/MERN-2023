import React from "react";
import { useAuth } from "../context/authContext";
import { useNavigate } from "react-router-dom";

const Login = () => {
  const { login } = useAuth();
  const navigate = useNavigate();
  return (
    <div className="container">
      <h1>This is Login Page</h1>
      <button
        onClick={() => {
          login();
          navigate(-1);
        }}
      >
        Login
      </button>
    </div>
  );
};

export default Login;

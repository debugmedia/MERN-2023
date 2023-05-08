import React from "react";
import { useAuth } from "../context/authContext";
import { Navigate, Outlet } from "react-router-dom";

const ProtectedRoute = () => {
  const { auth } = useAuth();

  if (!auth) {
    return <Navigate to="/login" />;
  }

  return <Outlet />;
};

export default ProtectedRoute;

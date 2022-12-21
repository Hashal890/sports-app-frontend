import React from "react";
import { Navigate } from "react-router-dom";

const PrivateRoute = ({ children }: any) => {
  const token = localStorage.getItem("token") || undefined;

  if (token === undefined) {
    return <Navigate to={"/"} />;
  }

  return children;
};

export default PrivateRoute;

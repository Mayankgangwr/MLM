import { Outlet, Navigate } from "react-router-dom";
import React from "react";
const isPrivate = localStorage.getItem("userData") == null ? false : true;
const PrivateRoute = () => {
  return isPrivate ? <Outlet /> : <Navigate to="/login" />;
};
export default PrivateRoute;

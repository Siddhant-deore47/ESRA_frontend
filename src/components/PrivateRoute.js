import React from "react";
import { Navigate, Outlet } from "react-router-dom";
import { isLoggedIn } from "../auth/auth";

export const PrivateRoute = () => {
  return isLoggedIn() ? <Outlet /> : <Navigate to={"/signin"} />;
};

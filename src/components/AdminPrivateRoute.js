import React from "react";
import { Navigate, Outlet } from "react-router-dom";
import { isLoggedIn } from "../auth/auth";

export const AdminPrivateRoute = () => {
  return isLoggedIn() ? <Outlet /> : <Navigate to={"/signin"} />;
};

import React, { Fragment } from "react";
import { useSelector } from "react-redux";
import { Outlet } from "react-router-dom";
const AdminRoute = () => {
  const { user } = useSelector((state) => state.user);
  return <Fragment>{user.role === "admin" && <Outlet />}</Fragment>;
};

export default AdminRoute;

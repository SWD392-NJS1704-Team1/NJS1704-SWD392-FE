import { PATHS } from "@/constant/path";
import tokenMethod from "@/utils/token";
import React from "react";
import { Navigate, Outlet } from "react-router-dom";

const PrivateRoute = ({ redirectPath }) => {
  if (!tokenMethod.get()) {
    return <Navigate to={redirectPath} replace={true} />;
  }
  return (
    <>
      <Outlet />
    </>
  );
};

export default PrivateRoute;

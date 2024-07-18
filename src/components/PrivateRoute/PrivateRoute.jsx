import tokenMethod from "@/utils/token";
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

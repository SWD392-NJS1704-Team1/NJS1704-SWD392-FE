import { Outlet } from "react-router-dom";

const LoginLayout = () => {
  return (
    <div
      className="text-white h-[100vh] flex justify-center items-center bg-cover"
      style={{ backgroundImage: "url('../src/assets/bg.jpg')" }}
    >
      {/* {children} */}
      <Outlet />
    </div>
  );
};

export default LoginLayout;

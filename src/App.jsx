import { Route, Routes } from "react-router-dom";
import WebRoute from "./routes/WebRoute";
import { PATHS } from "./constant/path";
import MainLayout from "./layout/MainLayout/MainLayout";
import Dashboard from "./pages/Dashboard/Dashboard ";
import UserManagement from "./pages/UserManagementPage/UserManagement";
import PrivateRoute from "./components/PrivateRoute/PrivateRoute";
import PageNotFound from "./pages/PageNotFound/PageNotFound";
import LoginLayout from "./layout/AuthLayout/LoginLayout";
import Login from "./pages/AuthPage/Login";
import Register from "./pages/AuthPage/Register";
import ForgotPassword from "./pages/ForgotPage/ForgotPassword";
import VerifyOTP from "./pages/ForgotPage/VerifyOTP";
import ResetPassword from "./pages/ForgotPage/ResetPassword";
import CustomerList from "./pages/CustomerList/CustomerList";

const App = () => {
  return (
    <>
      {/* <WebRoute /> */}
      <Routes>
      <Route element={<LoginLayout />}>
          <Route path={PATHS.LOGIN} element={<Login />} />
          <Route path={PATHS.FORGOT_PASSWORD} element={<ForgotPassword />} />
          <Route path={PATHS.VERIFY_OTP} element={<VerifyOTP />} />
          <Route path={PATHS.RESET_PASSWORD} element={<ResetPassword />} />
        </Route>
        <Route element={<PrivateRoute redirectPath={PATHS.LOGIN} />}>
          <Route path={PATHS.HOME} element={<MainLayout />}>
            <Route index element={<Dashboard />} />
            <Route path={PATHS.USER.INDEX} element={<UserManagement />} />
            <Route path={PATHS.CUSTOMER.INDEX} element={<CustomerList />} />
          </Route>
        </Route>
        <Route path="*" element={<PageNotFound />} />
      </Routes>
    </>
  );
};

export default App;

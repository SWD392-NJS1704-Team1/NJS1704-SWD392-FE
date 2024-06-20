import { Route, Routes } from 'react-router-dom';
import { PATHS } from './constant/path';
import MainLayout from './layout/MainLayout/MainLayout';
import Dashboard from './pages/Dashboard/Dashboard ';
import UserManagement from './pages/UserManagementPage/UserManagement';
import PrivateRoute from './components/PrivateRoute/PrivateRoute';
import PageNotFound from './pages/PageNotFound/PageNotFound';
import LoginLayout from './layout/AuthLayout/LoginLayout';
import Login from './pages/AuthPage/Login';
import ForgotPassword from './pages/ForgotPage/ForgotPassword';
import VerifyOTP from './pages/ForgotPage/VerifyOTP';
import ResetPassword from './pages/ForgotPage/ResetPassword';
import CustomerList from './pages/CustomerManagement/CustomerManagement';
import ProductPage from './pages/ProductPage/ProductPage';
import CounterManagement from './pages/CounterManagement/CounterManagement';
import TypePricesPage from './pages/TypePricespage/TypePricesPage';

const App = () => {
  return (
    <>
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
            <Route path={PATHS.PRODUCT.INDEX} element={<ProductPage />} />
            <Route path={PATHS.COUNTER.INDEX} element={<CounterManagement />} />
            <Route
              path={PATHS.TYPE_PRICES.INDEX}
              element={<TypePricesPage />}
            />
          </Route>
        </Route>
        <Route path="*" element={<PageNotFound />} />
      </Routes>
    </>
  );
};

export default App;

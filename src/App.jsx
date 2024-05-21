import { Route, Routes } from "react-router-dom";
import { PATHS } from "./constant/path";
import Dashboard from "./pages/Dashboard/Dashboard ";
import WebRoute from "./routes/WebRoute";
import PageNotFound from "./pages/PageNotFound/PageNotFound";
import MainLayout from "./layout/MainLayout/MainLayout";
import UserManagement from "./pages/UserManagementPage/UserManagement";
import CustomerList from "./pages/CustomerList/CustomerList";

const App = () => {
  return (
    <>
      <WebRoute />
      <Routes>
        <Route path={PATHS.HOME} element={<MainLayout />}>
          <Route index element={<Dashboard />} />
          <Route path="*" element={<PageNotFound />} />
          <Route path={PATHS.USER.INDEX} element={<UserManagement />} />
          <Route path={PATHS.CUSTOMER.INDEX} element={<CustomerList />} />
        </Route>
      </Routes>
    </>
  );
};

export default App;

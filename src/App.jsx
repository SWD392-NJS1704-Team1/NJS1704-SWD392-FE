import { Route, Routes } from "react-router-dom";
import { PATHS } from "./constant/path";
import Dashboard from "./pages/Dashboard/Dashboard ";
import WebRoute from "./routes/WebRoute";
import PageNotFound from "./pages/PageNotFound/PageNotFound";
import MainLayout from "./layout/MainLayout/MainLayout";

const App = () => {
  return (
    <>
      <WebRoute />
      <Routes>
        <Route path={PATHS.HOME} element={<MainLayout />}>
          <Route index element={<Dashboard />} />
          <Route path="*" element={<PageNotFound />} />
        </Route>
      </Routes>
    </>
  );
};

export default App;

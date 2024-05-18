import { BrowserRouter, Route, Routes } from "react-router-dom";
import { PATH } from "./constant/path";
import Dashboard from "./pages/Dashboard/Dashboard ";
import WebRoute from "./routes/WebRoute";
import PageNotFound from "./pages/PageNotFound/PageNotFound";

const App = () => {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path={PATH.HOME} element={<Dashboard />} />
          <Route path="*" element={<PageNotFound />} />
        </Routes>
      </BrowserRouter>
      <WebRoute />
    </>
  );
};

export default App;

import { Route, Routes } from "react-router-dom";
import { routes } from ".";

const WebRoute = () => {
  return (
    <Routes>
      {routes.map((route) => {
        const Page = route.component;
        const Layout = route.layout;
        return (
          <>
            <Route
              key={route.path}
              path={route.path}
              element={
                <Layout>
                  <Page />
                </Layout>
              }
            />
          </>
        );
      })}
    </Routes>
  );
};

export default WebRoute;

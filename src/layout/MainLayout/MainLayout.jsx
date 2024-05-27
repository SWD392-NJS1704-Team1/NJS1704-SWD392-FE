import Footer from "@/components/Footer/Footer";
import Header from "@/components/Header/Header";
import Navigator from "@/components/Menu/Menu";
import { MainContextProvider } from "@/context/MainContext";
import { Layout } from "antd";
import { Content } from "antd/es/layout/layout";
import { Outlet } from "react-router-dom";

const MainLayout = () => {
  return (
    <MainContextProvider>
      <Layout className="min-h-screen">
        <Header />
        <Layout>
          <div className="bg-white">
            <Navigator />
          </div>
          <Content className="flex flex-col">
            <Outlet />
          </Content>
        </Layout>
        <Footer />
      </Layout>
    </MainContextProvider>
  );
};

export default MainLayout;

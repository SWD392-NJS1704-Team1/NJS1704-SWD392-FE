import Footer from "@/components/Footer/Footer";
import Header from "@/components/Header/Header";
import { MainContextProvider } from "@/context/MainContext";
import React from "react";
import { Outlet } from "react-router-dom";

const MainLayout = () => {
  return (
    <MainContextProvider>
      <div className="page-wrapper">
        <Header />
        <Outlet />
        <Footer />
      </div>
    </MainContextProvider>
  );
};

export default MainLayout;

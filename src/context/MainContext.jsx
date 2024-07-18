import { createContext, useContext, useEffect } from "react";
import { useLocation } from "react-router-dom";

const MainContext = createContext({});

export const MainContextProvider = ({ children }) => {
  // Xu li data can truyen
  const { pathname } = useLocation();

  useEffect(() => {
    //scroll to top
    window.scrollTo({
      top: 0,
      left: 0,
      behavior: "smooth",
    });
  }, [pathname]);

  return <MainContext.Provider>{children}</MainContext.Provider>;
};

export const useMainContext = () => useContext(MainContext);

import { ENV } from "@/constant/environments";
import { configureStore } from "@reduxjs/toolkit";
import authReducer from "./reducers/authReducer";

const store = configureStore({
    reducer: {
      auth: authReducer,
    },
    devTools: ENV === "development",
  });
  
  export default store;
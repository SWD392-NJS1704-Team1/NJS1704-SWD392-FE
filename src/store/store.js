import { ENV } from "@/constant/environments";
import { configureStore } from "@reduxjs/toolkit";
import authReducer from "./reducers/authReducer";
import popupReducer from "./reducers/popupReducer";

const store = configureStore({
  reducer: {
    auth: authReducer,
    popup: popupReducer,
  },
  devTools: ENV === "development",
});

export default store;

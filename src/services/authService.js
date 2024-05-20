import { LOGIN } from "@/constant/environments";
import axiosInstance from "@/utils/axiosInstance";

export const authService = {
  login(payload = {}) {
    return axiosInstance.post(LOGIN, payload);
  },
  register() {
    return axiosInstance.get(`/users/register`, {
      headers: { Authorization: `Bearer ${localStorage.getItem("token")}` },
    });
  },
};

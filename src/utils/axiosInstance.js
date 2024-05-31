import axios from "axios";
import tokenMethod from "@/utils/token.js";
import { BASE_URL, LOGIN } from "@/constant/environments";

const axiosInstance = axios.create({
  baseURL: BASE_URL,
});

// Interceptor cho phép can thiệp vào quá trình nhận phản hồi (RESPONSE) từ server.
axiosInstance.interceptors.response.use(
  (response) => {
    return response?.data;
  },
  async (error) => {
    // console.log("error", error);
    const originalRequest = error.config;

    // Nếu mã lỗi 403 hoặc 401 và request không chứa key _retry
    if (
      (error.response?.status === 403 || error.response?.status === 401) &&
      !originalRequest._retry
    ) {
      originalRequest._retry = true;
      try {
        // Gọi API để cập nhật token mới
        const res = await axiosInstance.post(LOGIN, {
          refresh_token: tokenMethod.get()?.refresh_token,
        });
        const { token: accessToken, refresh_token: refreshToken } =
          res.data || {};

        // Lưu lại token mới vào local storage hoặc cookie
        tokenMethod.set({
          accessToken,
          refreshToken,
        });

        // Thay đổi token trong header của yêu cầu ban đầu
        originalRequest.headers.Authorization = `Bearer ${accessToken}`;

        // Gọi lại yêu cầu ban đầu với token mới
        return axiosInstance(originalRequest);
      } catch (error) {
        console.log(error);
        // Xử lý lỗi nếu không thể cập nhật token mới
        tokenMethod.remove();
      }
    }

    // Nếu lỗi không phải 403 hoặc 401, trả về lỗi ban đầu
    return Promise.reject(error);
  }
);

// Interceptor cho phép can thiệp vào quá trình gửi yêu cầu (REQUEST) từ server.
axiosInstance.interceptors.request.use(
  (config) => {
    // xử lý yêu cầu trước khi gửi đi
    config.headers.Authorization = `Bearer ${tokenMethod.get()?.accessToken}`;
    return config;
  },
  (error) => {
    // xử lý lỗi nếu có
    return Promise.reject(error);
  }
);

export default axiosInstance;

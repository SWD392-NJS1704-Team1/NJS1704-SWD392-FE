import { LOGIN } from '@/constant/environments';
import axiosInstance from '@/utils/axiosInstance';

export const authService = {
  login(payload = {}) {
    return axiosInstance.post(LOGIN, payload);
  },
  getProfile() {
    return axiosInstance.get(`/users/profile`, {
      headers: { Authorization: `Bearer ${localStorage.getItem('token')}` },
    });
  },
};
